import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { TextureLoader } from "three";
import { Plane } from "@react-three/drei";

interface LogoProps {
  position: [number, number, number];
  rotation: THREE.Euler;
}

const LogoCircle = ({ position, rotation }: LogoProps) => {
  const texture = useLoader(TextureLoader, '/images/deloitte-rainbow-round.png');

  return (
    <Plane args={[3.1, 3.1]} rotation={rotation} position={position}>
      <meshBasicMaterial attach="material" map={texture} transparent side={THREE.DoubleSide} />
    </Plane>
  );
};

export default LogoCircle;