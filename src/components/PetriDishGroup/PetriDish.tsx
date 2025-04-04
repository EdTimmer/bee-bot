import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';

interface PetriDishProps {
  position: [number, number, number];
  rotation: THREE.Euler;
}

const PetriDish = ({ position, rotation }: PetriDishProps) => {
  const petriDishRef = useRef<THREE.Mesh>(null); 
  
  const gltf = useGLTF('/models/petri3.glb') as any;
  const mesh = gltf.nodes['Cylinder002'] as THREE.Mesh;

  useEffect(() => {
    if (petriDishRef.current) {
      petriDishRef.current.scale.set(2.2, 2.2, 2.2);
    }
  }, [petriDishRef]);

  return (
    <mesh ref={petriDishRef} geometry={mesh.geometry} rotation={rotation} position={position}>
      <meshPhysicalMaterial
        clearcoat={1}  // Shiny surface effect
        transmission={1}  // Fully transparent
        opacity={0.5}  // Fully opaque but will be transparent due to transmission
        // transparent={true}  // Enable transparency
        roughness={0}  // Smooth like glass
        reflectivity={0.1}  // Adjust reflection intensity
        metalness={0}  // Glass is non-metallic
        ior={1.45}  // Typical for glass (Index of Refraction)
        thickness={0.1}  // Controls the refraction and look of thickness
        // attenuationColor="#ffffff"  // The color of the glass when light passes through
        attenuationDistance={0.5}  // Distance at which the glass becomes less transparent
        envMapIntensity={0.5}  // Control the strength of the reflections
        // color="#999999"  // Use a slightly grey color instead of pure white
        // color='black'
        color= '#b9f9f4' // '#FFC300' '#b9f9db'
      />
    </mesh>
  );
};

export default PetriDish;