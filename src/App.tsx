import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useEffect, useState } from 'react';

import { 
  AppContainer,
  PetriDishContainer,
  ThreeDWebGroupContainer,
  ShelfContainer,
  DeloitteDigitalLogoContainer,
  Row,
  SecondRow,
  Header,
  HeaderContainer
} from './App.styles'
import PetriDishGroup from './components/PetriDishGroup';
import ShelfGroup from './components/ShelfGroup';
import OrbitalIndustriesLogoGroup from './components/OrbitalIndustriesLogoGroup';
import ThreeDWebGroup from './components/ThreeDWebGroup';

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
      <Row>
        <DeloitteDigitalLogoContainer>
          <Canvas gl={{ antialias: true }}>
            <PerspectiveCamera makeDefault fov={20} position={[0, 0, 20]} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 0, 10]} />
            <directionalLight position={[2, 0, 10]} />
            <directionalLight position={[-2, 0, 10]} />
            <directionalLight position={[0, 0, -10]} />
            <directionalLight position={[2, 0, -10]} />
            <directionalLight position={[-2, 0, -10]} />
            {!isMobile && <OrbitControls enableDamping enableZoom={false} />}
            <OrbitalIndustriesLogoGroup />
            <Environment preset="forest" />
          </Canvas>
        </DeloitteDigitalLogoContainer>    
      </Row>

      <SecondRow>
        <PetriDishContainer>
          <Canvas gl={{ antialias: true }}>
            <PerspectiveCamera makeDefault fov={20} position={[0, 0, 20]} />
            <ambientLight intensity={0.5} />
            <PetriDishGroup />
            <directionalLight position={[0, 10, 10]} />
            <directionalLight position={[10, -10, 0]} />
            <directionalLight position={[-10, -10, 0]} />
            <Environment preset="warehouse" />
            {!isMobile && <OrbitControls enableDamping enableZoom={false} />}
          </Canvas>          
        </PetriDishContainer>

        <ShelfContainer>
          <Canvas gl={{ antialias: true }}>
            <PerspectiveCamera makeDefault fov={20} position={[0, 0, 20]} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 10, 10]} />
            <directionalLight position={[10, -10, 0]} />
            <directionalLight position={[-10, -10, 0]} />
            {!isMobile && <OrbitControls enableDamping enableZoom={false} />}
            <ShelfGroup />
            <Environment preset="forest" />
          </Canvas>
        </ShelfContainer>
      </SecondRow>

    </AppContainer>
  )
}

export default App
