import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from 'three'

interface Props {
  position: [number, number, number];
  intensity: number;
  color: string;
  radius: number;
  speed: number;
  offset: number;
}

const AnimatedLight = ({ position = [0, 1, 30], intensity = 1, color = "#fed789", radius = 5, speed = 0.5, offset = 0 }: Props) => {
  const lightRef = useRef<THREE.DirectionalLight>(null);
  const timeRef = useRef(0);
  
  useFrame((_, delta) => {
    // const radius = radius;
    // const speed = 0.5;

    timeRef.current += delta * speed;
    
    
    // Calculate circular motion
    const x = Math.sin(timeRef.current) * radius + offset; 
    const z = Math.cos(timeRef.current) * radius;
    if (lightRef.current) {
      lightRef.current.position.x = x;
      // lightRef.current.position.z = z;
    }
  });

  return <directionalLight ref={lightRef} intensity={intensity} color={color} position={position} />;
};

export default AnimatedLight;