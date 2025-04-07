import { useEffect, useMemo, useState } from 'react';
import * as THREE from 'three';
import { Font, FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import { useTexture } from '@react-three/drei';

interface Props {
  position: [number, number, number];
  rotation: THREE.Euler;
  text: string;
  color: string;
}

const LogoTextBold = ({ position, rotation, text, color }: Props) => {
  const [font, setFont] = useState<Font | null>(null);

  useEffect(() => {
    const loader = new FontLoader();
    loader.load('/fonts/comfortaa/comfortaa_bold.json', (loadedFont) => {
      setFont(loadedFont);
    });
  }, []);

  // const texture = useTexture('/images/landscape_5.jpg');

  // // Memoize the environment map setup to ensure correct settings
  // const envMap = useMemo(() => {
  //   // Set the texture mapping to an equirectangular reflection map
  //   texture.mapping = THREE.EquirectangularReflectionMapping;
  //   // Ensure the texture updates its properties
  //   texture.needsUpdate = true;
  //   return texture;
  // }, [texture]);




  // Use `useMemo` to memoize the geometry creation and avoid recreation on every render
  const textGeometry = useMemo(() => {
    if (!font) return null;

    const textOptions = {
      font,
      size: 1.6,
      depth: 0.4,
      curveSegments: 12,
      bevelEnabled: false,
      bevelThickness: 0.1,
      bevelSize: 0.1,
      bevelOffset: 0,
      bevelSegments: 5,
    };

    const geometry = new TextGeometry(text, textOptions);
  
    // Compute the bounding box of the text and center it
    geometry.computeBoundingBox();
    geometry.center();  // This will center the text at the origin (0, 0, 0)

    return geometry;
  }, [font]);

  if (!font || !textGeometry) return null;

  return (
    <mesh geometry={textGeometry} rotation={rotation} position={position}>
      {/* <meshPhysicalMaterial
        clearcoat={1}  // Shiny surface effect
        transmission={1}  // Fully transparent
        opacity={1}  // Fully opaque but will be transparent due to transmission
        // transparent={true}  // Enable transparency
        roughness={0}  // Smooth like glass
        reflectivity={1}  // Adjust reflection intensity
        metalness={0}  // Glass is non-metallic
        ior={1.45}  // Typical for glass (Index of Refraction)
        thickness={1}  // Controls the refraction and look of thickness
        // attenuationColor="#ffffff"  // The color of the glass when light passes through
        attenuationDistance={0.01}  // Distance at which the glass becomes less transparent
        // envMapIntensity={1}  // Control the strength of the reflections
        // color="#999999"  // Use a slightly grey color instead of pure white
        // color='black'
        color={color} // '#7400cc' // '#8a00f3'
        // envMap={envMap}
      /> */}
      <meshStandardMaterial
        color={color}
        roughness={0}
        metalness={1}
      />
    </mesh>
  );
};

export default LogoTextBold;
