import { Canvas } from '@react-three/fiber';
import { CameraShake, Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
// import { CircularProgress, IconButton } from '@mui/material';
// import { SwapHorizOutlined } from '@mui/icons-material';
import SwapHorizOutlined from '@mui/icons-material/SwapHorizOutlined'
import AutoRenewOutlined from '@mui/icons-material/AutoRenewOutlined'
import IconButton from '@mui/material/IconButton'
import Cycle from '@mui/icons-material/Cyclone'
import CachedOutlined from '@mui/icons-material/CachedOutlined'


import { 
  AppContainer,
  MainContainer,
  SceneContent,
  LinkContainer
} from './App.styles'

import BeeBotGroup from './components/BeeBotGroup';
import { useState } from 'react';

function App() {
  const [isGroupClockwise, setIsGroupClockwise] = useState(true);
  const [isBotClockwise, setIsBotClockwise] = useState(true);
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 768); // 768px is a common breakpoint for mobile
  //   };

  //   handleResize();
  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  return (
    <AppContainer>
      <SceneContent>
        <MainContainer>
          <Canvas
            gl={{
              antialias: true,
              toneMapping: THREE.ACESFilmicToneMapping
            }}
            onCreated={({ gl }) => {
              gl.toneMapping = THREE.ACESFilmicToneMapping;
              gl.toneMappingExposure = 1.0;
            }}
          >
            <PerspectiveCamera makeDefault fov={20} position={[0, 2, 16]} />

            <directionalLight position={[0, 5, 5]} />
            <directionalLight position={[0, -5, 5]} />            

            <BeeBotGroup
              position={[0, -1.5, 0]}
              rotation={[0, 0, 0]}
              speed={0.3}
              isGroupClockwise={isGroupClockwise}
              isBotClockwise={isBotClockwise}
              botAxisRotationSpeed={0.015}
              minRadius={2}
              maxRadius={5}
              period={10}
            />

            <Environment background preset="forest" backgroundIntensity={0.3} />
            {/* <CameraShake
              maxYaw={0.05}
              maxPitch={0.05}
              maxRoll={0.05}
              yawFrequency={0.05}
              pitchFrequency={0.05}
              rollFrequency={0.05}
              intensity={1}
              decayRate={0.65}
            /> */}
            <OrbitControls enableDamping={true} />
          </Canvas>


        </MainContainer>

      </SceneContent>

      <div>
        <IconButton 
          aria-label="direction"
          type="button"
          onClick={() => setIsGroupClockwise(!isGroupClockwise)}
          sx={{ 
            color: 'white', 
            position: 'absolute',
            rotate: '90deg',
            top: '20px', 
            right: '100px',
            backgroundColor: 'rgba(0,0,0,0.2)',
            // opacity: isTransitioning ? 0.7 : 1,
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: 'rgba(0,0,0,0.4)',
            },
            '&:focus': {
              outline: 'none',
            },
            '&:focus-visible': {
              outline: 'none',
            },
          }}
        >
          <AutoRenewOutlined />
        </IconButton>

        <IconButton 
          aria-label="direction"
          type="button"
          onClick={() => setIsBotClockwise(!isBotClockwise)}
          sx={{ 
            color: 'white', 
            position: 'absolute',
            rotate: '90deg',
            top: '20px', 
            right: '40px',
            backgroundColor: 'rgba(0,0,0,0.2)',
            // opacity: isTransitioning ? 0.7 : 1,
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: 'rgba(0,0,0,0.4)',
            },
            '&:focus': {
              outline: 'none',
            },
            '&:focus-visible': {
              outline: 'none',
            },
          }}
        >
          <CachedOutlined />
        </IconButton>        
      </div>

      <LinkContainer>
        <a href="https://www.edtimmer.com/" target="_blank" aria-label="Link to portfolio" title="Link to portfolio">edtimmer.com</a>
      </LinkContainer>

    </AppContainer>
  )
}

export default App
