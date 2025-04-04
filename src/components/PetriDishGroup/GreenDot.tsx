import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

interface Props {
  position: [number, number, number];
  size: number;
}

const GreenDot = ({ position, size }: Props) => {

  // Load the single environment map image
  const texture = useLoader(THREE.TextureLoader, '/images/oil-green.jpg');
  texture.wrapS = THREE.MirroredRepeatWrapping;
  texture.wrapT = THREE.MirroredRepeatWrapping;
  texture.magFilter = THREE.LinearFilter;
  
  return (
    <mesh position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshBasicMaterial attach="material" map={texture} side={THREE.DoubleSide} />
    </mesh>
  );
};

export default GreenDot;