interface Props {
  position: [number, number, number];
  size: number;
  color: string;
}

const CylinderMesh = ({ position, size, color }: Props) => {
  return (
    <mesh position={position}>
      <cylinderGeometry args={[size, size, 0.45, 32]} />
      <meshStandardMaterial
        color={color}
        roughness={0}
        metalness={1}
      />
    </mesh>
  );
};

export default CylinderMesh;