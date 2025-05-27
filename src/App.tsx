import { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { Leva, useControls } from 'leva'
import { 
  AppContainer,
  MainContainer,
  SceneContent,
  LinkContainer
} from './App.styles'
import BeeBotGroup from './components/BeeBotGroup';
;

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Set the initial value on mount
    setIsMobile(window.innerWidth < breakpoint);
    
    function onResize() {
      setIsMobile(window.innerWidth < breakpoint);
    }
    
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [breakpoint]);
  
  return isMobile;
}


function App() {
  const [isGroupClockwise, setIsGroupClockwise] = useState(true);
  const [isBotClockwise, setIsBotClockwise] = useState(true);
  const isMobile = useIsMobile();

  const { groupSpeed, botSpeed, minRadius, maxRadius, period } = useControls({
    groupSpeed: { value: 0.3, min: 0, max: 1, step: 0.01, label: 'Group speed' },
    botSpeed: { value: 0.015, min: 0, max: 0.1, step: 0.001, label: 'Bot speed' },
    groupDirection: {
      value: isGroupClockwise,
      onChange: (value) => setIsGroupClockwise(value),
      label: 'Group direction',
      options: { clockwise: true, counterclockwise: false }
    },
    botSpinDirection: {
      value: isBotClockwise,
      onChange: (value) => setIsBotClockwise(value),
      label: 'Bot spin direction',
      options: { clockwise: true, counterclockwise: false }
    },
    minRadius: { value: 2, min: 0, max: 5, step: 0.1, label: 'Group min radius' },
    maxRadius: { value: 5, min: 0, max: 10, step: 0.1, label: 'Group max radius' },
    period: { value: 10, min: 1, max: 30, step: 1, label: 'Fluctuation period (s)' }
  })

  return (
    <>
      {!isMobile && <Leva theme={{ sizes: { rootWidth: '350px' } }} />}
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
              <PerspectiveCamera makeDefault fov={20} position={[-18, 2, 0]} />

              <directionalLight position={[0, 5, 5]} />
              <directionalLight position={[0, -5, 5]} /> 

              <BeeBotGroup
                position={[0, -1.5, 0]}
                rotation={[0, 0, 0]}
                speed={groupSpeed}
                isGroupClockwise={isGroupClockwise}
                isBotClockwise={isBotClockwise}
                botAxisRotationSpeed={botSpeed}
                minRadius={minRadius}
                maxRadius={maxRadius}
                period={period}
              />

              <Environment background preset="forest" backgroundIntensity={0.3} />
              {/* <Environment preset="forest" backgroundIntensity={0.3} /> */}
              <OrbitControls enableDamping={true} />
            </Canvas>
          </MainContainer>
        </SceneContent>

        <LinkContainer>
          <a href="https://www.edtimmer.com/" target="_blank" aria-label="Link to portfolio" title="Link to portfolio">edtimmer.com</a>
        </LinkContainer>
      </AppContainer>
    </>
  )
}

export default App
