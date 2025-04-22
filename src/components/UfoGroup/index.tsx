import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import * as THREE from 'three'
import Satellite from '../Satellite';

function UfoGroup() {
  const groupTwoRef = useRef<Group>(null);

  const ufoMeshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (groupTwoRef.current) {    
      groupTwoRef.current.rotation.y += delta * 0.4;
    }
    
  });

  useFrame((_, delta) => {
    if (ufoMeshRef.current) {
      ufoMeshRef.current.rotation.y -= delta * 3;
    }
  });


  return (
    <group position={[3, 4, -8]} scale={[1, 1, 1]} ref={groupTwoRef} rotation={[0.4, 0, 0]}>
      <Satellite ref={ufoMeshRef} position={[-12, 0, 0]} rotation={new THREE.Euler(0, 0, 0)} scale={0.03}  type={'ufo'} />
    </group>        
  );
}

export default UfoGroup;
