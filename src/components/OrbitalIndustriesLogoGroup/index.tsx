import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import LogoTextBold from './LogoTextBold';
import * as THREE from 'three';
import GreenDotGlass from './GreenDotGlass';
import LogoTextLight from './LogoTextLight';
import GreenDotMetal from './GreenDotMetal';
import GreenSpheresGroup from './GreenSpheresGroup';
import SphereLarge from './SphereLarge';

function OrbitalIndustriesLogoGroup() {
  const logoGroupRef = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (logoGroupRef.current) {
      const time = clock.getElapsedTime();
      logoGroupRef.current.rotation.y = Math.sin(time * 0.5) * 0.2;
    }
  });

  return (
    <group position={[0, 0, 0]} scale={[1.1, 1.1, 1.1]} ref={logoGroupRef} rotation={new THREE.Euler(-0.17, 0, 0)}>        
      <LogoTextBold text={'Orbital'} position={[0, 1.1, 0]} rotation={new THREE.Euler(0, 0, 0)} color={'#8a00f3'} />
      <LogoTextLight text={'express'} position={[0.1, -0.7, 0]} rotation={new THREE.Euler(0, 0, 0)} color={'#8a00f3'} />
      {/* <GreenDotGlass size={0.45} position={[-3.25, 1.1, 0]} color={'#8a00f3'} /> */}

      {/* <SphereLarge size={0.2} position={[-3.25, 1.1, 0]} color={'#00ed8a'} /> */}
      
      {/* <group position={[-1.8, 0.85, 0]}>
        <GreenDotMetal size={0.29} position={[0, 0, 0]} color={'#00ed8a'} radius={1.5} isClockwise={true} />
      </group> */}

      {/* <group position={[1.2, 0.85, 0]}>
        <GreenDotMetal size={0.29} position={[0, 0, 0]} color={'#00ed8a'} radius={1.5} isClockwise={false} />
      </group> */}

      {/* <group position={[1.2, 0.85, 0]}>
        <GreenDotMetal size={0.29} position={[0, 0, 0]} color={'#00ed8a'} radius={1.55} isClockwise={false} />
      </group> */}

      {/* <group position={[0, -1, 0]}>
        <GreenDotMetal size={0.29} position={[0, 0, 0]} color={'#00ed8a'} radius={3} isClockwise={true} />
      </group> */}
      {/* <GreenSpheresGroup position={[1.2, 0.85, 0]} radius={1.6} speed={1.1} /> */}

      {/* <GreenSpheresGroup position={[-3.25, 1.1, 0]} radius={1.05} speed={0.8} rotation={new THREE.Euler(Math.PI / 2, Math.PI / 2, 0)} sphereSize={0.1} /> */}
      <GreenSpheresGroup position={[-3.25, 1.1, 0]} radius={0.34} speed={0.4} rotation={new THREE.Euler(Math.PI / 2, 0, 0)} sphereSize={0.2} />
    </group>    
  );
}

export default OrbitalIndustriesLogoGroup;