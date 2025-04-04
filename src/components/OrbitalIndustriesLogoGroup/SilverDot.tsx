interface Props {
  position: [number, number, number];
  size: number;
  color: string;
}

const SilverDot = ({ position, size, color }: Props) => {
  return (
    <mesh position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial
        opacity={1}  // Fully opaque but will be transparent due to transmission
        roughness={0}  // Smooth like glass
        metalness={1}  // Glass is non-metallic
        envMapIntensity={0.1}  // Control the strength of the reflections
        color={color}
        // envMap={envMap}
      />
      {/* <pointLight
        position={[0, 0, 0]}  // Inside the sphere
        intensity={10}
        distance={5}
        decay={2}
        color="#ffcc99"  // Warm light color to simulate a lamp
      /> */}
      {/* <Environment preset='sunset' /> */}
      {/* <Environment map={texture} /> */}
    </mesh>
  );
};

export default SilverDot;