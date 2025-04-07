import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import LogoTextBold from './LogoTextBold';
import * as THREE from 'three';
import GreenDotGlass from './GreenDotGlass';
import LogoTextLight from './LogoTextLight';
import GreenDotMetal from './GreenDotMetal';
import SpheresGroup from './SpheresGroup';
import SphereLarge from './SphereLarge';
import AnimatedLight from '../AnimatedLight';

function OrbitalIndustriesLogoGroup() {
  const logoGroupRef = useRef<Group>(null);

  useFrame(({ clock }, delta) => {
    if (logoGroupRef.current) {
      const time = clock.getElapsedTime();
      // logoGroupRef.current.rotation.x = Math.sin((delta + time)  * 0.3) * 0.2;
    }
  });

  return (
    <group position={[0, 0, 0]} scale={[1.1, 1.1, 1.1]} ref={logoGroupRef} rotation={new THREE.Euler(-0.17, 0.32, 0.02)}>        
      {/* <LogoTextBold text={'Orbital'} position={[0, 1.1, 0]} rotation={new THREE.Euler(0, 0, 0)} color={'#8a00f3'} />
      <LogoTextLight text={'express'} position={[0.1, -0.7, 0]} rotation={new THREE.Euler(0, 0, 0)} color={'#8a00f3'} /> */}

      <LogoTextBold text={'Orbital'} position={[0, 1.1, 0]} rotation={new THREE.Euler(0, 0, 0)} color={'#6a6a6a'} />
      <LogoTextLight text={'express'} position={[0.1, -0.7, 0]} rotation={new THREE.Euler(0, 0, 0)} color={'#6a6a6a'} />
      
      <SpheresGroup position={[-3.25, 1.1, 0]} radius={0.34} speed={0.4} rotation={new THREE.Euler(Math.PI / 2, 0, 0)} sphereSize={0.17} color={'#6a6a6a'} />
    </group>    
  );
}

export default OrbitalIndustriesLogoGroup;