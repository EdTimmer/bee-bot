import { useMemo, useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

interface Props {
  position: [number, number, number];
  rotation: THREE.Euler;
  size: number;
}

const OilslickBack = ({ position, rotation, size }: Props) => {
  const shapeOneRef = useRef<THREE.Mesh>(null); 

  const texture = useLoader(THREE.TextureLoader, './images/rainbow1.jpg');

  const envMap = useMemo(() => {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    return texture;
  }, [texture]);

  return (
    <mesh ref={shapeOneRef} position={position} rotation={rotation}>
      <circleGeometry args={[size, 100]} /> 
      <meshStandardMaterial envMap={envMap} metalness={1.0} roughness={0.0} opacity={1.0} envMapIntensity={1.0} />
    </mesh>
  );
};

export default OilslickBack;