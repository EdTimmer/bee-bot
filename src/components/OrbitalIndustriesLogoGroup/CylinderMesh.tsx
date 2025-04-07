interface Props {
  position: [number, number, number];
  size: number;
  color: string;
}

const CylinderMesh = ({ position, size, color }: Props) => {
  return (
    <mesh position={position}>
      <cylinderGeometry args={[size, size, 0.45, 32]} />
      {/* <meshPhysicalMaterial
        clearcoat={1}  // Shiny surface effect
        transmission={1}  // Fully transparent
        opacity={0.2}  // Fully opaque but will be transparent due to transmission
        // transparent={true}  // Enable transparency
        roughness={0}  // Smooth like glass
        reflectivity={0.5}  // Adjust reflection intensity
        metalness={0}  // Glass is non-metallic
        ior={1.45}  // Typical for glass (Index of Refraction)
        thickness={0.00001}  // Controls the refraction and look of thickness
        // attenuationColor="#ffffff"  // The color of the glass when light passes through
        attenuationDistance={2.5}  // Distance at which the glass becomes less transparent
        envMapIntensity={0.1}  // Control the strength of the reflections
        // color="#999999"  // Use a slightly grey color instead of pure white
        // color='black'
        color={color} // '#7400cc' // '#8a00f3'
      /> */}
      <meshStandardMaterial
        color={color}
        roughness={0}
        metalness={1}
      />
    </mesh>
  );
};

export default CylinderMesh;