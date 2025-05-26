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

    // 1) rotate entire group
    const dir = isGroupClockwise ? -1 : 1;
    groupRef.current.rotation.y += delta * speed * dir;

    // 2) compute fluctuating radius & new vertex positions
    const t = clock.getElapsedTime(); // seconds
    const radius = getFluctuatingRadius(minRadius, maxRadius, period, t);
    const positions = getPentagonPositions(radius);

    // 3) push those back into each BeeBot’s Object3D
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
            'bee_bot8_blue.glb',
            'bee_bot8_green.glb',
            'bee_bot8_yellow.glb',
            'bee_bot8_red.glb',
            'bee_bot8_purple.glb'
          ][i]}
          isBotClockwise={isBotClockwise}
        />
      ))}
    </group>
  );
}

export default BeeBotGroup;
