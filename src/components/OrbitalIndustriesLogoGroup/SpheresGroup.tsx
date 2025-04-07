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
        {/* <SilverDot size={sphereSize} position={[radius * (-1), 0, 0]} color={'#fff'} />
        <SilverDot size={sphereSize} position={[radius, 0, 0]} color={'#fff'} />

        <SilverDot size={sphereSize} position={[0, 0, radius * (-1)]} color={'#fff'} />
        <SilverDot size={sphereSize} position={[0, 0, radius]} color={'#fff'} /> */}

        {/* <GreenDotGlass size={sphereSize} position={[radius * (-1), 0, 0]} color={'#00ed8a'} /> */}
        {/* <GreenDotGlass size={sphereSize} position={[radius, 0, 0]} color={'#00ed8a'} />

        <GreenDotGlass size={sphereSize} position={[0, 0, radius * (-1)]} color={'#00ed8a'} />
        <GreenDotGlass size={sphereSize} position={[0, 0, radius]} color={'#00ed8a'} /> */}

        <CylinderMesh size={sphereSize} position={[radius * (-1), 0, 0]} color={color} />
        <CylinderMesh size={sphereSize} position={[radius, 0, 0]} color={color} />

        <CylinderMesh size={sphereSize} position={[0, 0, radius * (-1)]} color={color} />
        <CylinderMesh size={sphereSize} position={[0, 0, radius]} color={color} />

        {/* <GreenDotGlass size={sphereSize} position={[radius, 0, 0]} color={'#00ed8a'} /> */}
      </group>
    )
  }

  export default SpheresGroup;