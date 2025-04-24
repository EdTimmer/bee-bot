import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import Satellite from '../Satellite';

function CivSatGroup() {
  const groupRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {   
      groupRef.current.rotation.y -= delta * 0.1;
    }
    
  });

  return (
    <group ref={groupRef} position={[3, 3, -9]} scale={[1, 1, 1]} rotation={[0.5, 0, 0]}>
      <Satellite
        position={[9.5, 0, 0]}
        rotation={[Math.PI / 2, 0.2, 0]}
        scale={0.07}
        type={'civilian1'}
      />

      <Satellite
        position={[-9.5, 0, 0]}
        rotation={[-Math.PI / 2, Math.PI / 2 + 0.2, Math.PI]}
        scale={0.08}
        type={'civilian2'}
      />
    </group>    
  );
}

export default CivSatGroup;
