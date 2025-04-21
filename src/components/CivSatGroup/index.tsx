import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import * as THREE from 'three'
import Satellite from '../Satellite';

function CivSatGroup() {
  const groupOneRef = useRef<Group>(null);
  const groupTwoRef = useRef<Group>(null);

  // Rotate the group on each frame
  useFrame((_, delta) => {
    if (groupOneRef.current) {
      // rotate the group around the Y axis      
      groupOneRef.current.rotation.y -= delta * 0.1;
    }
    
  });

  useFrame((_, delta) => {
    if (groupTwoRef.current) {
      // rotate the group around the Y axis      
      groupTwoRef.current.rotation.y -= delta * 0.1;
    }
    
  });


  const milSatRef = useRef<THREE.Mesh>(null);
  const timeRef = useRef(0);
  useFrame((_, delta) => {
    if (milSatRef.current) {
      // rotate the group around the Y axis
      milSatRef.current.rotation.z -= delta * 0.2;
    }
  });


  useFrame((_, delta) => {
    const radius = 10;
    const speed = 0.05;

    timeRef.current += delta * speed;
        
    if (milSatRef.current) {
      milSatRef.current.position.x = Math.sin(timeRef.current) * radius;     
      // milSatRef.current.position.y = Math.sin(timeRef.current) * radius;
      milSatRef.current.position.z = Math.cos(timeRef.current) * radius + 29;
    }
  });

  return (
    <group position={[3, -2.5, -5]} scale={[1, 1, 1]} >
      <perspectiveCamera fov={20} position={[0, 0, 10]} />        
      
      {/* <Satellite ref={milSatRef} position={[0, -0.2, 0]} rotation={new THREE.Euler(Math.PI / 2, 0, 0)} scale={0.08} type={'military2'} /> */}
      
      <group position={[-0.5, 0, -5]} scale={[1, 1, 1]} ref={groupOneRef} rotation={[0.4, 0, 0.4]}>
        {/* <Satellite position={[-10, 0, 0]} rotation={new THREE.Euler(Math.PI / 2, 0, Math.PI)} scale={0.3} offset={[-10, -5, 0]}  type={'civilian1'} /> */}
        <Satellite position={[12, 0, 0]} rotation={new THREE.Euler(0, 0, Math.PI)} scale={0.07} offset={[-10, -5, 0]}  type={'civilian1'} />
      </group>

      <group position={[-0.5, 0, -5]} scale={[1, 1, 1]} ref={groupTwoRef} rotation={[0.4, 0, -0.4]}>
        {/* <Satellite position={[-10, 0, 0]} rotation={new THREE.Euler(0, Math.PI, Math.PI)} scale={0.1} offset={[-10, -5, 0]}  type={'civilian1'} /> */}
        <Satellite position={[-12, 0, 0]} rotation={new THREE.Euler(Math.PI, Math.PI, -0.3)} scale={0.05} offset={[-10, -5, 0]}  type={'civilian2'} />
        {/* <Satellite position={[-10, 0, 0]} rotation={new THREE.Euler(Math.PI, Math.PI, Math.PI)} scale={0.06} offset={[-10, -5, 0]}  type={'ufo'} /> */}



        {/* <Satellite position={[10, 0, 0]} rotation={new THREE.Euler(Math.PI / 2, 0, 0)} scale={0.3} offset={[-10, -5, 0]}  type={'civilian1'} /> */}
      </group>
      {/* <Satellite position={[-2, 0, 3]} rotation={new THREE.Euler(Math.PI / 2, 0, 0)} scale={0.1} offset={[-12, -2, 1]}  type={'military2'} /> */}
      {/* <Satellite position={[-2, 0, 3]} rotation={new THREE.Euler(Math.PI / 2, 0, 0)} scale={0.1} offset={[4, 5, 1]} type={'military2'} /> */}
      
    </group>    
  );
}

export default CivSatGroup;
