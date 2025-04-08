import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { forwardRef, useEffect, useLayoutEffect, useRef } from "react";
import * as THREE from 'three'

type SatelliteTypes = 'civilian1' | 'military1' | 'military2';

interface Props {
  children?: React.ReactNode;
  rotationSpeed?: number;
  [key: string]: any;
  scale: number;
  position: [number, number, number];
  rotation: [number, number, number];
  offest: [number, number, number];
  type: SatelliteTypes;
}

const Satellite = forwardRef<any, Props>(({ children, rotationSpeed = 1.5, scale = 1.0, position = [0, 0, 0], rotation = [0, 0, 0], type, offset, ...props }, ref) => {
  
  const getSatelliteType = (type: SatelliteTypes) => {
    switch (type) {
      case 'civilian1':
        return '../../models/satellite.glb';
      case 'military1':
        return '../../models/satellite_box_1_joined_4.glb';
      case 'military2':
          return '../../models/satellite_box_3_joined.glb';
      default:
        return '../../models/satellite.glb';
    }
  }
  const { nodes, materials } = useGLTF(getSatelliteType(type))
  // Create local ref if no ref is provided
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

  // useEffect(() => {
  //   if (meshRef.current) {
  //     meshRef.current.position.set(position[0], position[1], position[2]);
  //     meshRef.current.rotation.set(rotation[0], rotation[1], rotation[2]);
  //   }
  // }, [position, rotation]);

  useLayoutEffect(() => {
    Object.values(materials).forEach((material) => {
      (material as THREE.MeshStandardMaterial).roughness = 0
    })
  }, [])

  useFrame((_, delta) => {
    if (meshRef.current) {
      // meshRef.current.rotation.y -= rotationSpeed * delta * 0.5;
      // meshRef.current.rotation.x += rotationSpeed * delta;
      // meshRef.current.rotation.z += rotationSpeed * delta;
    }
  });

  const timeRef = useRef(0);
  
  // useFrame((_, delta) => {
  //   const radius = 10;
  //   const speed = 0.1;

  //   timeRef.current += delta * speed;
        
  //   if (meshRef.current) {
  //     meshRef.current.position.x = Math.sin(timeRef.current) * radius + offset[0];     
  //     meshRef.current.position.y = Math.sin(timeRef.current) * radius + offset[1];
  //     meshRef.current.position.z = -Math.cos(timeRef.current) * radius + offset[2];
  //   }
  // });

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