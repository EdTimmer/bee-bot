import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useEffect, useState } from 'react';

import { 
  AppContainer,
  MainContainer,
  LogoContainer,
  SceneContent,
  MilSatContainer,
  LinkContainer
} from './App.styles'
import OrbitalIndustriesLogoGroup from './components/OrbitalIndustriesLogoGroup';
import CivSatGroup from './components/CivSatGroup';
import RaiderGroup from './components/RaiderGroup';
import BeeBotGroup from './components/BeeBotGroup';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // 768px is a common breakpoint for mobile
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <AppContainer>
      <SceneContent>
        <MainContainer>
          <Canvas gl={{ antialias: true }}>
            <PerspectiveCamera makeDefault fov={20} position={[0, 0, 20]} />
            <ambientLight intensity={0.5} />
            {/* <directionalLight position={[0, 0, 10]} intensity={1} /> */}

            <BeeBotGroup position={[0, 0, 0]} rotation={[0, 0, 0]} speed={0} isClockwise={false} />
            <Environment preset="sunset" /> // city
            <OrbitControls enableDamping enableZoom={true} />
          </Canvas>
        </MainContainer>

      </SceneContent>

      <LinkContainer>
        <a href="https://www.edtimmer.com/" target="_blank" aria-label="Link to portfolio" title="Link to portfolio">edtimmer.com</a>
      </LinkContainer>

    </AppContainer>
  )
}

export default App
