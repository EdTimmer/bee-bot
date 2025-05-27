import { forwardRef, useRef, useEffect, useImperativeHandle } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface Props {
  fileName: string;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
  rotationSpeed?: number;
  isBotClockwise?: boolean;
}

const BeeBot = forwardRef<THREE.Group, Props>(
  (
    {
      fileName = "bee_bot12_blue.glb",
      scale = 1,
      position = [0, 0, 0],
      rotation = [0, 0, 0],
      rotationSpeed = 0.01,
      isBotClockwise = true,
    },
    ref
  ) => {
    const parentGroupRef = useRef<THREE.Group>(null);
    const groupRef = useRef<THREE.Group>(null);

    // forward groupRef to the parent ref (callback or object)
    useImperativeHandle(ref, () => groupRef.current!);

    const { animations, scene } = useGLTF(
      "../../models/" + fileName
    );

    const { actions } = useAnimations(animations, parentGroupRef);

    useEffect(() => {
      Object.values(actions).forEach((a) => a && a.play());
    }, [actions]);

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
        if (isBotClockwise) {
          groupRef.current.rotation.y -= rotationSpeed;
        } else {
          groupRef.current.rotation.y += rotationSpeed;
        }
      }
    });

    // animate parentGroupRef to wobble outwardly from the center of the pentagon
    useFrame(() => {
      if (parentGroupRef.current && groupRef.current) {
        // use the child's Y rotation (which is changing) to drive the wobble
        parentGroupRef.current.rotation.z = 
          Math.sin(groupRef.current.rotation.y) * 0.2;
      }
    });

    return (
      <group ref={parentGroupRef} position={position}>
        <primitive
          ref={groupRef}
          object={scene}
          rotation={rotation}
          scale={scale}
        />
      </group>
    );
  }
);

export default BeeBot;