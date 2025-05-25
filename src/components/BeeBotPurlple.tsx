import { useGLTF } from "@react-three/drei";
import { forwardRef } from "react";
import * as THREE from 'three'

interface Props {
  scale: number;
  position: [number, number, number];
  rotation: [number, number, number];
}

const BeeBotPurple = forwardRef<any, Props>(({scale = 1.0, position = [0, 0, 0], rotation = [0, 0, 0]}, ref) => {
  

  const { nodes, materials } = useGLTF('../../models/bee_bot7_purple.glb');

  return (
    <group position={position} rotation={new THREE.Euler(rotation[0], rotation[1], rotation[2])} ref={ref}>
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
  )
})

export default BeeBotPurple;
