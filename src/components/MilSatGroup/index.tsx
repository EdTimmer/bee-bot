import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import * as THREE from 'three'
import Satellite from '../Satellite';

function MilSatGroup() {
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
      milSatRef.current.rotation.z -= delta * 0.35;
    }
  });


  useFrame((_, delta) => {
    const radius = 6;
    const speed = 0.125;

    timeRef.current += delta * speed;
        
    if (milSatRef.current) {
      milSatRef.current.position.x = Math.sin(timeRef.current) * radius;     
      // milSatRef.current.position.y = Math.sin(timeRef.current) * radius;
      milSatRef.current.position.z = Math.cos(timeRef.current) * radius + 0;  // + 29
    }
  });

  return (
    <group position={[0, 0, 20]} scale={[1, 1, 1]} >
      {/* <perspectiveCamera fov={20} position={[0, 0, 10]} />         */}
      {/* <SphereAnimated size={2.3}/>
      <GreenGlassCover size ={2.5} position={[0, 0, 0]} color={'#ffa1ef'} /> */}
      {/* <Satellite position={[0, 0, 0]} rotation={new THREE.Euler(-3.6, -0.6, -0.8)} scale={0.3} offset={[-10, 0, 0]} type={'civilian1'} /> */}
      <Satellite ref={milSatRef} position={[0, 0.3, 0]} rotation={new THREE.Euler(Math.PI / 2, 0, Math.PI / 2)} scale={0.08} type={'military2'} />
      
      
    </group>    
  );
}

export default MilSatGroup;
