import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import PetriDish from './PetriDish';
import TextUranium from './TextUranium';
import * as THREE from 'three';
import GreenDot from './GreenDot';
import TextGlass from './TextGlass';
import OilSlick from './OilSlick';
import LogoCircle from './LogoCircle';
import OilslickBack from './OilslickBack';
import GreenDotMetalTwo from './GreenDotMetalTwo';
import Satellite from '../Satellite';


function PetriDishGroup() {
  const petriGroupRef = useRef<Group>(null);

  // Rotate the group on each frame
  useFrame(({ clock }) => {
    if (petriGroupRef.current) {
      const time = clock.getElapsedTime();
      petriGroupRef.current.rotation.x = Math.sin(time * 0.5) * 0.2;
      petriGroupRef.current.rotation.y += 0.007; // Adjust rotation speed on Z-axis
    }
  });

  return (
    <group position={[0, -0.5, 0]} scale={[0.9, 0.9, 0.9]} ref={petriGroupRef} rotation={new THREE.Euler(0, 0, 0)}>
      {/* <TextUranium text={'Orbital'} position={[-0.1, 2.85, 0]} rotation={new THREE.Euler(0, 0, 0)} size={1.0} depth={0.4} />
      <GreenDot size={0.22} position={[2.65, 2.55, 0]} />
      <TextGlass text={'O'} position={[-0.1, 0, 0.1]} rotation={new THREE.Euler(0, 0, 0)} size={1.9} depth={0.5} color={'white'} />
      <GreenDotMetalTwo color={'#168900'} size={0.3} position={[0.9, -0.6, 0.1]} />
      <OilSlick size={0.9} scale={[1.7, 1.7, 0.3]} position={[0, 0, -0.2]} rotation={new THREE.Euler(0, 0, 0)} />
      <OilslickBack size={2} position={[0, 0, -0.4]} rotation={new THREE.Euler(0, 0, 0)} />
      <PetriDish position={[0, 0, 0]} rotation={new THREE.Euler(Math.PI / 2, 0, 0)} />
      <LogoCircle position={[0, 0, -0.6]} rotation={new THREE.Euler(Math.PI, 0, Math.PI)} /> */}
      <Satellite position={[0, 0, -0.6]} rotation={new THREE.Euler(Math.PI, 0, Math.PI)} scale={0.25} />
    </group>    
  );
}

export default PetriDishGroup;
