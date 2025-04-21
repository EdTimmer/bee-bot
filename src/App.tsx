import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Lightformer, OrbitControls, PerspectiveCamera, RandomizedLight } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';

import { 
  AppContainer,
  PetriDishContainer,
  ThreeDWebGroupContainer,
  ShelfContainer,
  LogoContainer,
  Row,
  SecondRow,
  Header,
  HeaderContainer,
  MilSatContainer
} from './App.styles'
import PetriDishGroup from './components/PetriDishGroup';
import ShelfGroup from './components/ShelfGroup';
import OrbitalIndustriesLogoGroup from './components/OrbitalIndustriesLogoGroup';
import ThreeDWebGroup from './components/ThreeDWebGroup';
import CivSatGroup from './components/CivSatGroup';
import AnimatedLight from './components/AnimatedLight';
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

  // Move light around the center on the x/z plane


  return (
    <AppContainer>
      {/* <Row> */}
        <LogoContainer>
          <Canvas gl={{ antialias: true }}>
            <PerspectiveCamera makeDefault fov={20} position={[0, 0, 20]} />
            {/* <Lightformer intensity={0.75} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} /> */}
            {/* <rectAreaLight width={30} height={10} position={[0, 0, 10]} intensity={50} onUpdate={(self) => self.lookAt(0, 0, 0)} /> */}
            {/* <RandomizedLight amount={8} frames={100} position={[0, 0, -10]} /> */}

            <ambientLight intensity={1} />

            <directionalLight position={[5, 5, 10]} color={'white'} intensity={0.5} />
            
            <directionalLight position={[5, 4, 10]} color={'white'} intensity={0.5} />
            <directionalLight position={[6, 4, 10]} color={'white'} intensity={0.5} />
            <directionalLight position={[7, 4, 10]} color={'white'} intensity={0.5} />
            <directionalLight position={[8, 4, 10]} color={'white'} intensity={0.5} />
            <directionalLight position={[9, 4, 10]} color={'white'} intensity={0.5} />
            <directionalLight position={[10, 4, 10]} color={'white'} intensity={0.5} />
            <directionalLight position={[11, 4, 10]} color={'white'} intensity={0.5} />

            

            {/* <directionalLight position={[0, 0, 10]} /> */}
            {/* <directionalLight position={[1, 0, 10]} /> */}
            {/* <directionalLight position={[2, 0, 10]} /> */}


            {/* <AnimatedLight position={[0, 4, 30]} intensity={1} color={"#f4ebda"} radius={8} speed={0.5} offset={1} /> */}
            {/* <AnimatedLight position={[0, 3, 30]} intensity={1} color={"#f4ebda"} radius={8} speed={0.9} offset={5} /> */}
            {/* <AnimatedLight position={[0, 1, 30]} intensity={1} color={"#f4ebda"} radius={8} speed={0.9} offset={10} /> */}
            
            {/* <AnimatedLight position={[0, 0, 30]} intensity={1} color={"#f4ebda"} radius={8} speed={0.9} offset={1} /> */}

            {/* <AnimatedLight position={[0, -1, 30]} intensity={1} color={"#f4ebda"} radius={8} speed={0.9} offset={5} /> */}
            {/* <AnimatedLight position={[0, -3, 30]} intensity={1} color={"#f4ebda"} radius={8} speed={0.9} offset={10} /> */}
            {/* <AnimatedLight position={[0, -7, 30]} intensity={1} color={"#f4ebda"} radius={8} speed={0.9} offset={1} /> */}
            

            {/* <directionalLight ref={lightRef} position={[0, 0, 10]} /> */}

            {/* <spotLight
              position={[0, 0, 10]}
              angle={90}
              penumbra={100}
              intensity={10}
              color="white"
            /> */}

            {/* <directionalLight position={[0, 0, -10]} /> */}
            <directionalLight position={[2, 0, -10]} />
            <directionalLight position={[-2, 0, -10]} />

            {/* <directionalLight position={[-2, 2, 10]} />
            <directionalLight position={[2, 2, 10]} />
            <directionalLight position={[-2, -2, 10]} />
            <directionalLight position={[2, -2, 10]} /> */}

            {/* <directionalLight position={[3, 0, 1]} /> */}
            {!isMobile && <OrbitControls enableDamping enableZoom={false} />}
            <OrbitControls enableDamping enableZoom={true} />
            <OrbitalIndustriesLogoGroup />
            <Environment preset="warehouse" />
            {/* <Environment files='/images/new_1.jpg' /> */}
          </Canvas>
        </LogoContainer>    
      {/* </Row> */}

      <SecondRow>
        {/* <PetriDishContainer>
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
        </PetriDishContainer> */}

        <ShelfContainer>
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
            <RaiderGroup />
            <Environment preset="warehouse" />
            <fog attach="fog" args={['#ffffff', 10, 125]} />
          </Canvas>
        </ShelfContainer>

        <MilSatContainer>
          <Canvas gl={{ antialias: true }}>
            <PerspectiveCamera makeDefault fov={20} position={[0, 0, 20]} />
            {/* <ambientLight intensity={0.5} /> */}
            <directionalLight position={[0, 0, -2]} intensity={1} />
            <directionalLight position={[0, 5, -2]} intensity={1} />
            <directionalLight position={[0, -5, -2]} intensity={1} />
            
            <directionalLight position={[0, -5, -5]} intensity={1} color={'#f9d87b'} />
            {!isMobile && <OrbitControls enableDamping enableZoom={false} />}
            <MilSatGroup />
            <Environment preset="warehouse" />
            {/* <fog attach="fog" args={['#ffffff', 10, 125]} /> */}
          </Canvas>
        </MilSatContainer>

      </SecondRow>

    </AppContainer>
  )
}

export default App
