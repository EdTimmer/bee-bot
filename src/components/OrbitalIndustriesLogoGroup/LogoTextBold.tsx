import { useEffect, useMemo, useState } from 'react';
import * as THREE from 'three';
import { Font, FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'

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
  
    geometry.computeBoundingBox();
    geometry.center();

    return geometry;
  }, [font]);

  if (!font || !textGeometry) return null;

  return (
    <mesh geometry={textGeometry} rotation={rotation} position={position}>
      <meshStandardMaterial
        color={color}
        roughness={0}
        metalness={1}
      />
    </mesh>
  );
};

export default LogoTextBold;
