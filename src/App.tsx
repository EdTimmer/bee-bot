import { Canvas } from '@react-three/fiber';
import { CameraShake, Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
// import { useEffect, useState } from 'react';
import * as THREE from 'three';

import { 
  AppContainer,
  MainContainer,
  SceneContent,
  LinkContainer
} from './App.styles'

import BeeBotGroup from './components/BeeBotGroup';

function App() {
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
            <PerspectiveCamera makeDefault fov={20} position={[0, 0, 16]} />
            {/* <ambientLight intensity={0.5} /> */}
            {/* <directionalLight position={[0, 0, 5]} /> */}

            <directionalLight position={[0, 5, 5]} /> //center top
            <directionalLight position={[0, -5, 5]} /> //center bottom

            {/* <directionalLight position={[-5, 0, 5]} /> // center left */}
            {/* <directionalLight position={[5, 0, 5]} /> // center right */}

            {/* <directionalLight position={[-5, 5, 5]} /> // top left
            <directionalLight position={[5, 5, 5]} /> // top right

            <directionalLight position={[-5, -5, 5]} /> // bottom left
            <directionalLight position={[5, -5, 5]} /> // bottom right */}

            

            <BeeBotGroup
              position={[0, -2.0, 0]}
              rotation={[0, 0, 0]}
              speed={0.3}
              isGroupClockwise={false}
              botAxisRotationSpeed={0.015}
            />
            {/* <Environment background files="/images/satara_night_no_lamps_2k.hdr" /> */}
            <Environment background preset="forest" backgroundIntensity={0.5} />
            <OrbitControls enableDamping enableZoom={true} />

            <CameraShake
              maxYaw={0.05} // Max amount camera can yaw in either direction
              maxPitch={0.05} // Max amount camera can pitch in either direction
              maxRoll={0.05} // Max amount camera can roll in either direction
              yawFrequency={0.05} // Frequency of the the yaw rotation
              pitchFrequency={0.05} // Frequency of the pitch rotation
              rollFrequency={0.05} // Frequency of the roll rotation
              intensity={1} // initial intensity of the shake
              decayRate={0.65} // if decay = true this is the rate at which intensity will reduce at />
            />
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
