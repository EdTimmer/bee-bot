import { useGLTF } from "@react-three/drei";
import { forwardRef } from "react";
import * as THREE from 'three';

interface Props {
  children?: React.ReactNode;
  [key: string]: any;
  scale: number;
  position: [number, number, number];
  rotation: [number, number, number];
  ref: React.Ref<any>;
}

const Raider = forwardRef<any, Props>(({scale = 1.0, position = [0, 0, 0], rotation = [0, 0, 0]}, ref) => {
  

  // Load the GLB file using the useGLTF hook
  const { nodes, materials } = useGLTF('../../models/raider_20.glb');
  console.log('nodes:', Object.keys(nodes))
  console.log('materials:', Object.keys(materials))

  
  return (
    <group position={position} rotation={rotation} ref={ref}>
      {Object.values(nodes)
        .filter((n) => n instanceof THREE.Mesh)
        .map((mesh) => (
          <mesh
            key={mesh.uuid}
            geometry={mesh.geometry}
            material={materials[mesh.material.name]}
            castShadow
            receiveShadow
            scale={scale}
          />
        ))}
    </group>
  );
});

export default Raider;
