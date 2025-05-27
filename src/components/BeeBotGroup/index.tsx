import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import BeeBot from './BeeBot';
import { getPentagonPositions, getPentagonRotations, getFluctuatingRadius } from '../../utils/mathFunctions';

interface Props {
  position: [number, number, number];
  rotation: [number, number, number];
  speed: number;
  isGroupClockwise: boolean;
  isBotClockwise: boolean;
  botAxisRotationSpeed: number;
  minRadius?: number;
  maxRadius?: number;
  period?: number;
}

function BeeBotGroup({
  position,
  rotation,
  speed,
  isGroupClockwise,
  isBotClockwise,
  botAxisRotationSpeed,
  minRadius = 2,
  maxRadius = 3,
  period = 2
}: Props) {
  const groupRef = useRef<Group>(null);

  useFrame(({ clock }, delta) => {
    if (!groupRef.current) return;

    const dir = isGroupClockwise ? -1 : 1;
    groupRef.current.rotation.y += delta * speed * dir;

    const t = clock.getElapsedTime();
    const radius = getFluctuatingRadius(minRadius, maxRadius, period, t);
    const positions = getPentagonPositions(radius);

    groupRef.current.children.forEach((child, i) => {
      child.position.set(...positions[i]);
    });
  });

  return (
    <group ref={groupRef} position={position} rotation={rotation}>
      {getPentagonRotations().map((rot, i) => (
        <BeeBot
          key={i}
          position={[0, 0, 0]}
          rotation={rot}
          scale={4}
          rotationSpeed={botAxisRotationSpeed}
          fileName={[
            'bee_bot12_blue.glb', //blue
            'bee_bot12_green.glb', //green
            'bee_bot12_yellow.glb', //yellow
            'bee_bot12_red.glb', //red
            'bee_bot12_purple.glb' //purple
          ][i]}
          isBotClockwise={isBotClockwise}
        />
      ))}
    </group>
  );
}

export default BeeBotGroup;
