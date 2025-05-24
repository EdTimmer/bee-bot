import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import Satellite from '../Satellite';
import BeeBotBrown from '../BeeBotBrown';
import BeeBotSilver from '../BeeBotSilver';
import BeeBotYellow from '../BeeBotYellow';
import BeeBotPurple from '../BeeBotPurlple';
import BeeBotBlue from '../BeeBotBlue';
import BeeBotRed from '../BeeBotRed';
import BeeBotGreen from '../BeeBotGreen';

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
      <BeeBotBlue
        position={[-3, -1, 0]}
        rotation={[0, 0, 0]}
        scale={4.0}
      />
      <BeeBotRed
        position={[3, -1, 0]}
        rotation={[0, 0, 0]}
        scale={4.0}
      />
      <BeeBotYellow
        position={[0, -1, 3]}
        rotation={[0, 0, 0]}
        scale={4.0}
      />
      <BeeBotPurple
        position={[0, -1, -3]}
        rotation={[0, 0, 0]}
        scale={4.0}
      />
      <BeeBotGreen
        position={[0, -1, 0]}
        rotation={[0, 0, 0]}
        scale={4.0}
      />

    </group>
  );
}

export default BeeBotGroup;
