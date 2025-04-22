import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import * as THREE from 'three'
import Satellite from '../Satellite';

function MilSatGroup() {
  const groupOneRef = useRef<Group>(null);
  const groupTwoRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (groupOneRef.current) {    
      groupOneRef.current.rotation.y -= delta * 0.1;
    }
    
  });

  useFrame((_, delta) => {
    if (groupTwoRef.current) {     
      groupTwoRef.current.rotation.y -= delta * 0.06;
    }
    
  });


  const milSatRef = useRef<THREE.Mesh>(null);
  const timeRef = useRef(0);
  useFrame((_, delta) => {
    if (milSatRef.current) {
      milSatRef.current.rotation.z -= delta * 0.35;
    }
  });


  useFrame((_, delta) => {
    const radius = 6;
    const speed = 0.125;

    timeRef.current += delta * speed;
        
    if (milSatRef.current) {
      milSatRef.current.position.x = Math.sin(timeRef.current) * radius;     
      milSatRef.current.position.z = Math.cos(timeRef.current) * radius;
    }
  });

  return (
    <group position={[0, 0, 20]} scale={[1, 1, 1]} >
      <Satellite ref={milSatRef} position={[0, 0.3, 0]} rotation={new THREE.Euler(Math.PI / 2, 0, Math.PI / 2)} scale={0.05} type={'military'} />
    </group>
  );
}

export default MilSatGroup;
