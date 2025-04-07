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
  const shelfGroupRef = useRef<Group>(null);

  // Rotate the group on each frame
  useFrame(({ clock }) => {
    if (shelfGroupRef.current) {
      const time = clock.getElapsedTime();
      // shelfGroupRef.current.rotation.x = Math.sin(time * 0.5) * 0.2;
      // shelfGroupRef.current.rotation.y -= 0.007; // Adjust rotation speed on Y-axis
    }
  });

  return (
    <group position={[0, 0, 0]} scale={[1, 1, 1]} ref={shelfGroupRef}>
      <perspectiveCamera fov={20} position={[0, 0, 10]} />        
      {/* <SphereAnimated size={2.3}/>
      <GreenGlassCover size ={2.5} position={[0, 0, 0]} color={'#ffa1ef'} /> */}
      <Satellite position={[0, 0, 0]} rotation={new THREE.Euler(-3.6, -0.6, -0.8)} scale={0.3} offset={[-10, 0, 0]} type={'civilian1'} />
      <Satellite position={[10, 0, 0]} rotation={new THREE.Euler(Math.PI / 2, 0, 0)} scale={0.1} offset={[-5, 0, 0]} type={'military1'} />
      <Satellite position={[0, -3, 0]} rotation={new THREE.Euler(-3.6, -0.6, -0.8)} scale={0.3} offset={[-10, -5, 0]}  type={'civilian1'} />
      <Satellite position={[-2, 0, 3]} rotation={new THREE.Euler(Math.PI / 2, 0, 0)} scale={0.3} offset={[-12, -2, 1]}  type={'military1'} />
      <Satellite position={[-2, 0, 3]} rotation={new THREE.Euler(Math.PI / 2, 0, 0)} scale={0.3} offset={[4, 5, 1]} type={'military1'} />
      
    </group>    
  );
}

export default PlanetGroup;
