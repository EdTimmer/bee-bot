import { useGLTF } from "@react-three/drei";
import { forwardRef, useEffect, useLayoutEffect, useRef } from "react";
import * as THREE from 'three'

type SatelliteTypes = 'civilian1' | 'civilian2' | 'military' | 'ufo' | 'raider';

interface Props {
  children?: React.ReactNode;
  rotationSpeed?: number;
  [key: string]: any;
  scale: number;
  position: [number, number, number];
  rotation: [number, number, number];
  type: SatelliteTypes;
}

const Satellite = forwardRef<any, Props>(({ children, rotationSpeed = 1.5, scale = 1.0, position = [0, 0, 0], rotation = [0, 0, 0], type, ...props }, ref) => {
  
  const getSatelliteType = (type: SatelliteTypes) => {
    switch (type) {
      case 'civilian1':
        return '../../models/civ_sat_1.glb';
      case 'civilian2':
        return '../../models/civ_sat_2.glb';
      case 'military':
        return '../../models/mil_sat_1.glb';
      case 'ufo':
        return '../../models/ufo.glb';
      case 'raider':
        return '../../models/raider_3.glb';
      default:
        return '../../models/satellite_civ_1.glb';
    }
  }
  const { nodes, materials } = useGLTF(getSatelliteType(type))
  const localRef = useRef<THREE.Mesh>(null);
  const meshRef = (ref as React.RefObject<THREE.Mesh>) || localRef;

  useEffect(() => {
    console.log("Available nodes:", nodes);
  }, [nodes]);

  const defaultMaterial = useRef(
    new THREE.MeshStandardMaterial({
      color: 0x888888,
      metalness: 1.0,
      roughness: 0.2,
    })
  );

  useLayoutEffect(() => {
    Object.values(materials).forEach((material) => {
      (material as THREE.MeshStandardMaterial).roughness = 0
    })
  }, [])

  const satelliteNode = Object.values(nodes).find(
    (node) => (node as THREE.Mesh).isMesh
  ) as THREE.Mesh;
  console.log('rotation :>> ', rotation);
  
  return (
    <mesh
      castShadow
      receiveShadow
      ref={meshRef}
      position={position}
      rotation={rotation}
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