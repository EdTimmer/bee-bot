import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { forwardRef, useEffect, useLayoutEffect, useRef } from "react";
import * as THREE from 'three'

interface Props {
  children?: React.ReactNode;
  rotationSpeed?: number;
  [key: string]: any;
  scale: number;
}

const Satellite = forwardRef<any, Props>(({ children, rotationSpeed = 1.5, scale = 1.0, ...props }, ref) => {
  const { nodes, materials } = useGLTF('../../models/satellite.glb')
  // Create local ref if no ref is provided
  const localRef = useRef<THREE.Mesh>(null);
  const meshRef = (ref as React.RefObject<THREE.Mesh>) || localRef;

  useEffect(() => {
    console.log("Available nodes:", nodes);
  }, [nodes]);

  const defaultMaterial = useRef(
    new THREE.MeshStandardMaterial({
      color: 0x888888,
      metalness: 0.8,
      roughness: 0.2,
    })
  );

  useLayoutEffect(() => {
    Object.values(materials).forEach((material) => {
      (material as THREE.MeshStandardMaterial).roughness = 0
    })
  }, [])

  // useFrame((_, delta) => {
  //   if (meshRef.current) {
  //     meshRef.current.rotation.y += rotationSpeed * delta;
  //     meshRef.current.rotation.x += rotationSpeed * delta;
  //     meshRef.current.rotation.z += rotationSpeed * delta;
  //   }
  // });

  const satelliteNode = Object.values(nodes).find(
    (node) => (node as THREE.Mesh).isMesh
  ) as THREE.Mesh;
  
  return (
    <mesh
      castShadow
      receiveShadow
      ref={meshRef}
      {...props}
      scale={scale}
      geometry={satelliteNode?.geometry}
      material={defaultMaterial.current}
      dispose={null}>
      {children}
    </mesh>
  )
})

export default Satellite;