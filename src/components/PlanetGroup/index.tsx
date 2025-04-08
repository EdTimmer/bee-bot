import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import ShelfContainer from './ShelfContainer';
import SphereAnimated from './SphereAnimated';
import GreenGlassCover from './GreenGlassCover';
import ShelfText from './ShelfText';
import GreenDotGlassTwo from './GreenDotGlassTwo';
import * as THREE from 'three'
import Satellite from '../Satellite';

function PlanetGroup() {
  const groupOneRef = useRef<Group>(null);

  // Rotate the group on each frame
  useFrame(({ clock }, delta) => {
    if (groupOneRef.current) {
      // rotate the group around the Y axis      
      groupOneRef.current.rotation.y -= delta * 0.1;
    }
    
  });


  const milSatRef = useRef<THREE.Mesh>(null);
  const timeRef = useRef(0);
  useFrame(({ clock }, delta) => {
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
    <group position={[0, 0, -5]} scale={[1, 1, 1]} >
      <perspectiveCamera fov={20} position={[0, 0, 10]} />        
      {/* <SphereAnimated size={2.3}/>
      <GreenGlassCover size ={2.5} position={[0, 0, 0]} color={'#ffa1ef'} /> */}
      {/* <Satellite position={[0, 0, 0]} rotation={new THREE.Euler(-3.6, -0.6, -0.8)} scale={0.3} offset={[-10, 0, 0]} type={'civilian1'} /> */}
      <Satellite ref={milSatRef} position={[0, 0, 0]} rotation={new THREE.Euler(Math.PI / 2, 0, 0)} scale={0.08} type={'military2'} />
      
      <group position={[0, 0, -5]} scale={[1, 1, 1]} ref={groupOneRef} rotation={[0.4, 0, 0.4]}>
        <Satellite position={[-10, 0, 0]} rotation={new THREE.Euler(Math.PI / 2, 0, Math.PI)} scale={0.3} offset={[-10, -5, 0]}  type={'civilian1'} />
        <Satellite position={[10, 0, 0]} rotation={new THREE.Euler(Math.PI / 2, 0, 0)} scale={0.3} offset={[-10, -5, 0]}  type={'civilian1'} />
      </group>
      {/* <Satellite position={[-2, 0, 3]} rotation={new THREE.Euler(Math.PI / 2, 0, 0)} scale={0.1} offset={[-12, -2, 1]}  type={'military2'} /> */}
      {/* <Satellite position={[-2, 0, 3]} rotation={new THREE.Euler(Math.PI / 2, 0, 0)} scale={0.1} offset={[4, 5, 1]} type={'military2'} /> */}
      
    </group>    
  );
}

export default PlanetGroup;
