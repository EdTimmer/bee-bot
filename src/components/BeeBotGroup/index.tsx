import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import Satellite from '../Satellite';
import BeeBotBrown from '../BeeBotBrown';
import BeeBotSilver from '../BeeBotSilver';
import BeeBotGold from '../BeeBotGold';
import BeeBotPurple from '../BeeBotPurlple';

interface Props {
  position: [number, number, number];
  rotation: [number, number, number];
  speed: number;
  isClockwise: boolean;
}

function BeeBotGroup({position, rotation, speed, isClockwise}: Props) {
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
      <BeeBotBrown
        position={[-3, -1, 0]}
        rotation={[0, 0, 0]}
        scale={4.0}
      />
      <BeeBotSilver
        position={[3, -1, 0]}
        rotation={[0, 0, 0]}
        scale={4.0}
      />
      <BeeBotGold
        position={[0, -1, 3]}
        rotation={[0, 0, 0]}
        scale={4.0}
      />
      <BeeBotPurple
        position={[0, -1, -3]}
        rotation={[0, 0, 0]}
        scale={4.0}
      />

    </group>
  );
}

export default BeeBotGroup;
