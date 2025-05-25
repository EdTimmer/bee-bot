import { forwardRef, useRef, useEffect, useImperativeHandle } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface Props {
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
  rotationSpeed?: number;
}

const BeeBotBlue = forwardRef<THREE.Group, Props>(
  (
    {
      scale = 1,
      position = [0, 0, 0],
      rotation = [0, 0, 0],
      rotationSpeed = 0.01,
    },
    ref
  ) => {
    const groupRef = useRef<THREE.Group>(null);

    // forward groupRef to the parent ref (callback or object)
    useImperativeHandle(ref, () => groupRef.current!);

    const { nodes, materials } = useGLTF(
      "../../models/bee_bot7_blue.glb"
    );

    // set initial rotation
    useEffect(() => {
      if (groupRef.current) {
        groupRef.current.rotation.set(
          rotation[0],
          rotation[1],
          rotation[2]
        );
      }
    }, [rotation]);

    // animate around Y
    useFrame(() => {
      if (groupRef.current) {
        groupRef.current.rotation.y -= rotationSpeed;
      }
    });

    return (
      <group ref={groupRef} position={position}>
        {Object.values(nodes)
          .filter((n) => n instanceof THREE.Mesh)
          .map((mesh) => (
            <mesh
              key={mesh.uuid}
              geometry={mesh.geometry}
              material={
                materials[(mesh.material! as THREE.Material).name]
              }
              castShadow
              receiveShadow
              scale={scale}
            />
          ))}
      </group>
    );
  }
);

export default BeeBotBlue;