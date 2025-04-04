import { useRef, useEffect } from 'react'
import { useFrame, extend, ReactThreeFiber } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'
import { Color } from 'three'
import plutoniumFragmentShader from '../../assets/shaders/plutonium/fragment.glsl?raw'
import plutoniumVertexShader from '../../assets/shaders/plutonium/vertex.glsl?raw'
import * as THREE from 'three'

const depthColor = '#85BB24'  // 'black'  //'#a70e93' // '#0077B6' // '#880C78'
const surfaceColor = '#fbf731'// '#184E77' // '#e9a0fd' // '#009ef3' // '#E999FF'

const PlutoniumMaterial = shaderMaterial(
  {
    uTime: 0,
    uBigWavesElevation: 0.05,
    uBigWavesFrequency: new THREE.Vector2(10, 10),
    uBigWavesSpeed: 1.2,
    uSmallWavesElevation: 0.0,
    uSmallWavesFrequency: 16.0,
    uSmallWavesSpeed: 0.3,
    uSmallWavesIterations: 4,
    uDepthColor: new Color(depthColor), // '#A3CFC9' '#72DFDD'
    uSurfaceColor: new Color(surfaceColor), // '#088C70' '#495057'
    uColorOffset: 0.0,
    uColorMultiplier: 6.0,
    wireframe: true,
    // side: THREE.DoubleSide,
  },
  plutoniumVertexShader,
  plutoniumFragmentShader
)

// Make shader material available in JSX
extend({ PlutoniumMaterial });

/**
 * Global declaration to let TypeScript know about plutoniumMaterial.
 * Can place this in the same file or a separate *.d.ts file.
 */
declare global {
  namespace JSX {
    interface IntrinsicElements {
      plutoniumMaterial: ReactThreeFiber.Object3DNode<THREE.ShaderMaterial, typeof PlutoniumMaterial>;
    }
  }
}

interface PlutoniumProps {
  position: [number, number, number];
  rotation: THREE.Euler;
  size: number;
}

const Plutonium = ({ position, rotation, size }: PlutoniumProps) => {
  const meshRef = useRef<THREE.Mesh>(null!)
  const materialRef = useRef<THREE.ShaderMaterial>(null!)

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.updateMatrix() // Ensure matrix update happens
    }
  }, [])

  // Update the time in the shader on each frame
  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.getElapsedTime()
    }
  })

  return (
    <mesh ref={meshRef} position={position} rotation={rotation} scale={[1, 1, 1]}>
      <circleGeometry args={[size, 364]} />
      <plutoniumMaterial ref={materialRef} attach="material" />
    </mesh>
  )
}

export default Plutonium;