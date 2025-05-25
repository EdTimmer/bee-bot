import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import BeeBot from '../BeeBot';
import { getPentagonPositions, getPentagonRotations } from '../../utils/mathFunctions';

interface Props {
  position: [number, number, number];
  rotation: [number, number, number];
  speed: number;
  isGroupClockwise: boolean;
  isBotClockwise: boolean;
  botAxisRotationSpeed: number;
}

function BeeBotGroup({position, rotation, speed, isGroupClockwise, isBotClockwise, botAxisRotationSpeed}: Props) {
  const groupRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {  
      if (isGroupClockwise) {
      groupRef.current.rotation.y += delta * speed;
      } else {
        groupRef.current.rotation.y -= delta * speed;
      }
    } 
  });

  return (
    <group ref={groupRef} position={position} scale={[1, 1, 1]} rotation={rotation}>
      <BeeBot
        position={getPentagonPositions(2.5)[0]}
        rotation={getPentagonRotations()[0]}
        scale={4.0}
        rotationSpeed={botAxisRotationSpeed}
        fileName='bee_bot7_blue_3.glb'
        isBotClockwise={isBotClockwise}
      />
      <BeeBot
        position={getPentagonPositions(2.5)[1]}
        rotation={getPentagonRotations()[1]}
        scale={4.0}
        rotationSpeed={botAxisRotationSpeed}
        fileName='bee_bot7_green_3.glb'
        isBotClockwise={isBotClockwise}
      />
      <BeeBot
        position={getPentagonPositions(2.5)[2]}
        rotation={getPentagonRotations()[2]}
        scale={4.0}
        rotationSpeed={botAxisRotationSpeed}
        fileName='bee_bot7_yellow_3.glb'
        isBotClockwise={isBotClockwise}        
      />
      <BeeBot
        position={getPentagonPositions(2.5)[3]}
        rotation={getPentagonRotations()[3]}
        scale={4.0}
        rotationSpeed={botAxisRotationSpeed}
        fileName='bee_bot7_red_3.glb'
        isBotClockwise={isBotClockwise}
      />
      <BeeBot
        position={getPentagonPositions(2.5)[4]}
        rotation={getPentagonRotations()[4]}
        scale={4.0}
        rotationSpeed={botAxisRotationSpeed}
        fileName='bee_bot7_purple_3.glb'
        isBotClockwise={isBotClockwise}
      />
    </group>
  );
}

export default BeeBotGroup;
