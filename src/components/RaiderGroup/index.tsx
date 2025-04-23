import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import * as THREE from 'three'
import Raider from '../Raider';

interface Props {
  position?: [number, number, number];
  rotation?: [number, number, number];
  rollSpeed: number;
  speed: number;
  raiderOnePosition: [number, number, number];
  raiderTwoPosition: [number, number, number];
  raiderRotation: [number, number, number];
}

function RaiderGroup({position, rotation, rollSpeed, speed, raiderOnePosition=[0, 0, 0], raiderTwoPosition=[2, 0, 2], raiderRotation}: Props) {
  const groupRef = useRef<Group>(null);
  const meshRefOne = useRef<THREE.Mesh>(null);
  const meshRefTwo = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      // rotate the group around the Y axis      
      groupRef.current.rotation.y -= delta * speed;
    }    
  });

  // Rotate mesh around x axis
  useFrame((_, delta) => {
    if (meshRefOne.current && meshRefTwo.current) {
      meshRefOne.current.rotation.y += delta * rollSpeed;
      meshRefTwo.current.rotation.y += delta * rollSpeed;
    }
  });

  return (
    <group position={position} scale={[1, 1, 1]} ref={groupRef} rotation={rotation}>
      <Raider ref={meshRefOne} position={raiderOnePosition} rotation={new THREE.Euler(...raiderRotation)} scale={0.08} />
      <Raider ref={meshRefTwo} position={raiderTwoPosition} rotation={new THREE.Euler(...raiderRotation)} scale={0.08} />
    </group>       
  );
}

export default RaiderGroup;
