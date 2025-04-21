import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import * as THREE from 'three'
import Satellite from '../Satellite';

function RaiderGroup() {
  const groupRef = useRef<Group>(null);
  const meshRefOne = useRef<THREE.Mesh>(null);
  const meshRefTwo = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      // rotate the group around the Y axis      
      groupRef.current.rotation.y -= delta * 0.3;
    }    
  });

  // Rotate mesh around x axis
  useFrame((_, delta) => {
    if (meshRefOne.current && meshRefTwo.current) {
      meshRefOne.current.rotation.y += delta * 1.2;
      meshRefTwo.current.rotation.y += delta * 1.2;
    }
  });

  return (
    <group position={[0, 1, -3]} scale={[1, 1, 1]} rotation={[0, 0, 0.3]}>
      <perspectiveCamera fov={20} position={[0, 0, 10]} />  

      <group position={[-0.5, 0.5, -7]} scale={[1, 1, 1]} ref={groupRef} rotation={[0.6, 0, -0.4]}>
        <Satellite ref={meshRefOne} position={[-15, 0, 0]} rotation={new THREE.Euler(-Math.PI / 2, -0.3, Math.PI / 2)} scale={0.07} type={'raider'} />
        <Satellite ref={meshRefTwo} position={[-13, 0, 2]} rotation={new THREE.Euler(-Math.PI / 2, -0.3, Math.PI / 2)} scale={0.07} type={'raider'} />
      </group>      
    </group>    
  );
}

export default RaiderGroup;
