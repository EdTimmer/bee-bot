import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useEffect, useState } from 'react';

import { 
  AppContainer,
  MainContainer,
  SceneContent,
  LinkContainer
} from './App.styles'

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
            {/* <directionalLight position={[0, 0, 5]} /> */}

            {/* <directionalLight position={[0, 5, 5]} /> //center top */}
            {/* <directionalLight position={[0, -5, 5]} /> //center bottom */}

            {/* <directionalLight position={[-5, 0, 5]} /> // center left */}
            {/* <directionalLight position={[5, 0, 5]} /> // center right */}

            <directionalLight position={[-5, 5, 5]} /> // top left
            <directionalLight position={[5, 5, 5]} /> // top right

            <directionalLight position={[-5, -5, 5]} /> // bottom left
            <directionalLight position={[5, -5, 5]} /> // bottom right

            

            <BeeBotGroup position={[0, 0, 0]} rotation={[0, 0, 0]} speed={0} isClockwise={false} />
            <Environment background files="/images/satara_night_no_lamps_2k.hdr" /> {/* city */}
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
