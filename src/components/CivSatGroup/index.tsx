import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import * as THREE from 'three'
import Satellite from '../Satellite';

function CivSatGroup() {
  const groupOneRef = useRef<Group>(null);
  const groupTwoRef = useRef<Group>(null);

  const groupRef = useRef<Group>(null);

  const civSatOneRef = useRef<THREE.Mesh>(null);
  const civSatTwoRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {   
      groupRef.current.rotation.y -= delta * 0.1;
    }
    
  });

  useFrame((_, delta) => {
    if (groupTwoRef.current) {
      groupTwoRef.current.rotation.y -= delta * 0.1;
    }    
  });

  return (
    <group ref={groupRef} position={[3.5, 3, -8]} scale={[1, 1, 1]} rotation={[0.6, 0, 0]}>
      {/* <group position={[-0.5, 0, 0]} scale={[1, 1, 1]} ref={groupOneRef} rotation={[0.4, 0, 0.2]}> */}
        <Satellite
          position={[9.5, 0, 0]}
          rotation={new THREE.Euler(Math.PI / 2, 0.2, 0)}
          scale={0.07}
          offset={[-10, -5, 0]}
          type={'civilian1'}
        />

      {/* <group position={[-2, 0, -5]} scale={[1, 1, 1]} ref={groupTwoRef} rotation={[0.4, 0, -0.4]}> */}
        <Satellite
          position={[-9.5, 0, 0]}
          rotation={new THREE.Euler(-Math.PI / 2, Math.PI / 2 + 0.2, Math.PI)}
          scale={0.08} offset={[-10, -5, 0]}
          type={'civilian2'}
        />
      {/* </group>       */}
    </group>    
  );
}

export default CivSatGroup;
