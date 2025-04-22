import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";
import * as THREE from 'three';
import CylinderMesh from "./CylinderMesh";

interface Props {
  position: [number, number, number];
  radius: number;
  speed: number;
  rotation: THREE.Euler;
  sphereSize: number;
  color: string;
}

const SpheresGroup = ({ position, radius, speed, rotation, sphereSize, color }: Props) => {
    const spheresGroupRef = useRef<Group>(null);

    useFrame((_, delta) => {
      if (spheresGroupRef.current) {
        spheresGroupRef.current.rotation.y -= delta * speed;
      }
    });

    return (
      <group position={position} scale={[1, 1, 1]} ref={spheresGroupRef} rotation={rotation}>
        <CylinderMesh size={sphereSize} position={[radius, 0, 0]} color={color} />
        <CylinderMesh size={sphereSize} position={[-radius * 0.5, 0, radius * Math.sqrt(3) / 2]} color={color} />
        <CylinderMesh size={sphereSize} position={[-radius * 0.5, 0, -radius * Math.sqrt(3) / 2]} color={color} />
      </group>
    )
  }

  export default SpheresGroup;