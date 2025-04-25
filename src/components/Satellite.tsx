import { useGLTF } from "@react-three/drei";
import { forwardRef } from "react";
import * as THREE from 'three'

type SatelliteTypes = 'civilian1' | 'civilian2' | 'military' | 'ufo' | 'raider';

interface Props {
  scale: number;
  position: [number, number, number];
  rotation: [number, number, number];
  type: SatelliteTypes;
}

const Satellite = forwardRef<any, Props>(({scale = 1.0, position = [0, 0, 0], rotation = [0, 0, 0], type}, ref) => {
  
  const getSatelliteType = (type: SatelliteTypes) => {
    switch (type) {
      case 'civilian1':
        return '../../models/civ_sat_1_5.glb';
      case 'civilian2':
        return '../../models/civ_sat_2_7.glb';
      default:
        return '../../models/civ_sat_1_4.glb';
    }
  }
  const { nodes, materials } = useGLTF(getSatelliteType(type));

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

export default Satellite;
