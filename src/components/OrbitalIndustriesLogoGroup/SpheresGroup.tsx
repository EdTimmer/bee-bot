import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";
import * as THREE from 'three';
import GreenDotGlass from "./GreenDotGlass";
import SilverDot from "./SilverDot";
import CylinderMesh from "./CylinderMesh";

interface Props {
  position: [number, number, number];
  radius: number;
  speed: number;
  rotation: THREE.Euler;
  sphereSize: number; // Optional prop for sphere size
  color: string;
}

const SpheresGroup = ({ position, radius, speed, rotation, sphereSize, color }: Props) => {
    const spheresGroupRef = useRef<Group>(null);

    useFrame((_, delta) => {
      if (spheresGroupRef.current) {
        // const time = clock.getElapsedTime();
        // spheresGroupRef.current.rotation.y = Math.sin(time * 0.8);
        spheresGroupRef.current.rotation.y -= delta * speed; // Rotate around the Y-axis
      }
    });

    return (
      <group position={position} scale={[1, 1, 1]} ref={spheresGroupRef} rotation={rotation}>
        {/* <CylinderMesh size={sphereSize} position={[radius * (-1), 0, 0]} color={color} />
        <CylinderMesh size={sphereSize} position={[radius, 0, 0]} color={color} />

        <CylinderMesh size={sphereSize} position={[0, 0, radius * (-1)]} color={color} />
        <CylinderMesh size={sphereSize} position={[0, 0, radius]} color={color} /> */}

        {/* First vertex (0°) */}
        <CylinderMesh size={sphereSize} position={[radius, 0, 0]} color={color} />
        
        {/* Second vertex (120°) */}
        <CylinderMesh size={sphereSize} position={[-radius * 0.5, 0, radius * Math.sqrt(3) / 2]} color={color} />
        
        {/* Third vertex (240°) */}
        <CylinderMesh size={sphereSize} position={[-radius * 0.5, 0, -radius * Math.sqrt(3) / 2]} color={color} />
      </group>
    )
  }

  export default SpheresGroup;