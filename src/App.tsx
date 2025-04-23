import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useEffect, useState } from 'react';

import { 
  AppContainer,
  MainContainer,
  LogoContainer,
  SceneContent,
  MilSatContainer
} from './App.styles'
import OrbitalIndustriesLogoGroup from './components/OrbitalIndustriesLogoGroup';
import CivSatGroup from './components/CivSatGroup';
import MilSatGroup from './components/MilSatGroup';
import UfoGroup from './components/UfoGroup';
import RaiderGroup from './components/RaiderGroup';

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
      {/* <Row> */}
        <LogoContainer>
          <Canvas gl={{ antialias: true }}>
            <PerspectiveCamera makeDefault fov={20} position={[0, 0, 20]} />
            <ambientLight intensity={1} />

            <directionalLight position={[5, 5, 10]} color={'white'} intensity={0.5} />
            
            <directionalLight position={[5, 4, 10]} color={'white'} intensity={0.5} />
            <directionalLight position={[6, 4, 10]} color={'white'} intensity={0.5} />
            <directionalLight position={[7, 4, 10]} color={'white'} intensity={0.5} />
            <directionalLight position={[8, 4, 10]} color={'white'} intensity={0.5} />
            <directionalLight position={[9, 4, 10]} color={'white'} intensity={0.5} />
            <directionalLight position={[10, 4, 10]} color={'white'} intensity={0.5} />
            <directionalLight position={[11, 4, 10]} color={'white'} intensity={0.5} />         

            <directionalLight position={[2, 0, -10]} />
            <directionalLight position={[-2, 0, -10]} />
            {!isMobile && <OrbitControls enableDamping enableZoom={false} />}
            <OrbitControls enableDamping enableZoom={true} />
            <OrbitalIndustriesLogoGroup />
            <Environment preset="warehouse" />
          </Canvas>
        </LogoContainer>    

      <SceneContent>
        <MainContainer>
          <Canvas gl={{ antialias: true }}>
            <PerspectiveCamera makeDefault fov={20} position={[0, 0, 20]} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 10, 10]} />
            <directionalLight position={[10, -10, 0]} />
            <directionalLight position={[-10, -10, 0]} />

            <directionalLight position={[0, -5, -5]} intensity={1} color={'#f9d87b'} />
            {!isMobile && <OrbitControls enableDamping enableZoom={false} />}
            <CivSatGroup />
            <UfoGroup />
            {/* <RaiderGroup /> */}
            <Environment preset="warehouse" />
            <fog attach="fog" args={['#ffffff', 10, 125]} />
          </Canvas>
        </MainContainer>

        <MilSatContainer>
          <Canvas gl={{ antialias: true }}>
            <PerspectiveCamera makeDefault fov={20} position={[0, 0, 20]} />
            <directionalLight position={[0, 0, -2]} intensity={1} />
            <directionalLight position={[0, 5, -2]} intensity={1} />
            <directionalLight position={[0, -5, -2]} intensity={1} />

            <directionalLight position={[0, 0, 20]} intensity={1} />
            
            <directionalLight position={[0, -5, -5]} intensity={1} color={'#f9d87b'} />
            {!isMobile && <OrbitControls enableDamping enableZoom={false} />}
            <MilSatGroup />
            <RaiderGroup />
            <Environment preset="warehouse" />
          </Canvas>
        </MilSatContainer>

      </SceneContent>

    </AppContainer>
  )
}

export default App
