import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import * as THREE from 'three'
import Satellite from '../Satellite';

function UfoGroup() {
  const groupOneRef = useRef<Group>(null);
  const groupTwoRef = useRef<Group>(null);

  const ufoMeshRef = useRef<THREE.Mesh>(null);

  // Rotate the group on each frame
  useFrame((_, delta) => {
    if (groupOneRef.current) {
      // rotate the group around the Y axis      
      groupOneRef.current.rotation.y += delta * 0.3;
    }
    
  });

  useFrame((_, delta) => {
    if (groupTwoRef.current) {
      // rotate the group around the Y axis      
      groupTwoRef.current.rotation.y += delta * 0.3;
    }
    
  });

  useFrame((_, delta) => {
    if (ufoMeshRef.current) {
      // rotate the group around the Y axis
      // ufoMeshRef.current.rotation.z -= delta * 0.6;
      // ufoMeshRef.current.rotation.x -= delta * 0.6; 
      ufoMeshRef.current.rotation.y -= delta * 1.6;
    }
  });


  // const ufoRef = useRef<THREE.Mesh>(null);
  // const timeRef = useRef(0);
  // useFrame((_, delta) => {
  //   if (ufoRef.current) {
  //     // rotate the group around the Y axis
  //     ufoRef.current.rotation.z -= delta * 0.6;
  //   }
  // });


  // useFrame((_, delta) => {
  //   const radius = 1;
  //   const speed = 0.05;

  //   timeRef.current += delta * speed;
        
  //   if (ufoRef.current) {
  //     ufoRef.current.position.x = Math.sin(timeRef.current) * radius;     
  //     // milSatRef.current.position.y = Math.sin(timeRef.current) * radius;
  //     ufoRef.current.position.z = Math.cos(timeRef.current) * radius + 29;
  //   }
  // });

  return (
    <group position={[0, 0, -3]} scale={[1, 1, 1]} rotation={[0, 0, 0.3]}>
      <perspectiveCamera fov={20} position={[0, 0, 10]} />        
      
      {/* <Satellite ref={milSatRef} position={[0, -0.2, 0]} rotation={new THREE.Euler(Math.PI / 2, 0, 0)} scale={0.08} type={'military2'} /> */}
      
      <group position={[-0.5, 0, -5]} scale={[1, 1, 1]} ref={groupOneRef} rotation={[0.4, 0, 0.4]}>
        {/* <Satellite position={[-10, 0, 0]} rotation={new THREE.Euler(Math.PI / 2, 0, Math.PI)} scale={0.3} offset={[-10, -5, 0]}  type={'civilian1'} /> */}
        {/* <Satellite position={[18, 0, 0]} rotation={new THREE.Euler(0, 0, 0)} scale={0.1} offset={[-10, -5, 0]}  type={'ufo'} /> */}
      </group>

      <group position={[-0.5, 0, -5]} scale={[1, 1, 1]} ref={groupTwoRef} rotation={[0.4, 0, -0.4]}>
        {/* <Satellite position={[-10, 0, 0]} rotation={new THREE.Euler(0, Math.PI, Math.PI)} scale={0.1} offset={[-10, -5, 0]}  type={'civilian1'} /> */}
        <Satellite ref={ufoMeshRef} position={[-10, 0, 0]} rotation={new THREE.Euler(0, 0, 0)} scale={0.06} offset={[-10, -5, 0]}  type={'ufo'} />



        {/* <Satellite position={[10, 0, 0]} rotation={new THREE.Euler(Math.PI / 2, 0, 0)} scale={0.3} offset={[-10, -5, 0]}  type={'civilian1'} /> */}
      </group>
      {/* <Satellite position={[-2, 0, 3]} rotation={new THREE.Euler(Math.PI / 2, 0, 0)} scale={0.1} offset={[-12, -2, 1]}  type={'military2'} /> */}
      {/* <Satellite position={[-2, 0, 3]} rotation={new THREE.Euler(Math.PI / 2, 0, 0)} scale={0.1} offset={[4, 5, 1]} type={'military2'} /> */}
      
    </group>    
  );
}

export default UfoGroup;
