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
            <directionalLight position={[0, 5, 0]} intensity={1} />

            <CivSatGroup
              position={[7, 0, -9]}
              rotation={[0.7, 0, 0]}
              speed={0.2}
              isClockwise={true}
            />
            <CivSatGroup
              position={[13, -5, 0]}
              rotation={[0.7, 0, 0]}
              speed={0.25}
              isClockwise={false}
            />
            <Environment preset="warehouse" />
          </Canvas>
        </MainContainer>

        <MilSatContainer>
          <Canvas gl={{ antialias: true }}>
            <PerspectiveCamera makeDefault fov={20} position={[0, 0, 20]} />
            <RaiderGroup 
              position={[-0.5, 3.5, -12]}
              rotation={[0.6, 0, -0.3]}
              rollSpeed={0.6}
              speed={0.27}
              raiderOnePosition={[-15, 0, 0]}
              raiderTwoPosition={[-13, 0, 2]}
              raiderRotation={[-Math.PI / 2, -Math.PI / 2 + 2, Math.PI / 2]}
            />
            <RaiderGroup
              position={[-12, 0, 15]}
              rotation={[0.4, 1, 0]}
              rollSpeed={1.2}
              speed={0.27}
              raiderOnePosition={[-13, 0, 0]}
              raiderTwoPosition={[-11, 0, 2]}
              raiderRotation={[-Math.PI / 2, 0, Math.PI / 2]}
            />
            <Environment preset="warehouse" />
          </Canvas>
        </MilSatContainer>

      </SceneContent>

    </AppContainer>
  )
}

export default App
