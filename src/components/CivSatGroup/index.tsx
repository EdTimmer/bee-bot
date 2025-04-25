import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import Satellite from '../Satellite';

interface Props {
  position: [number, number, number];
  rotation: [number, number, number];
  speed: number;
  isClockwise: boolean;
}

function CivSatGroup({position, rotation, speed, isClockwise}: Props) {
  const groupRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {  
      if (isClockwise) {
      groupRef.current.rotation.y -= delta * speed;
      } else {
        groupRef.current.rotation.y += delta * speed;
      }
    } 
  });

  return (
    <group ref={groupRef} position={position} scale={[1, 1, 1]} rotation={rotation}>
      <Satellite
        position={[isClockwise ? 16 : 14, 0, 0]}
        rotation={[isClockwise ? 0 : Math.PI, 0, isClockwise ? 0.2 : Math.PI - 0.2]}
        scale={0.07}  // 0.07
        type={'civilian1'}
      />

      <Satellite
        position={[isClockwise ? -16 : -10, 0, 0]}
        rotation={[isClockwise ? 0 : Math.PI, 0, isClockwise ? -0.2 : Math.PI + 0.2]}
        scale={0.08}
        type={'civilian2'}
      />
    </group>
  );
}

export default CivSatGroup;
