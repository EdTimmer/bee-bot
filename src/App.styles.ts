import styled from 'styled-components';
import colors from './styles/colors';
import landscapeImage from '/images/landscape_5.jpg';

export const AppContainer = styled.div`
  position: relative;
  z-index: 1;
  background-image: url(${landscapeImage});
  font-family: 'Roboto Mono', monospace;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const SceneContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  /* margin-top: -10rem; */
  flex-wrap: wrap;

  @media (min-width: 1024px) {
    gap: 40rem;
  }
`;

export const Header = styled.h1`
  color: ${colors.seasalt};
  font-family: 'Carlito', 'Roboto Mono', monospace;
  font-size: 2.6rem;
  margin: 0;
  padding: 0;
  font-weight: 400;
  text-align: center;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const PetriDishContainer = styled.div`
  width: 35rem;
  height: 40rem;
  cursor: pointer;
`;

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const MilSatContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 3;
`;

export const ThreeDWebGroupContainer = styled.div`
  width: 50rem;
  height: 25rem;
  cursor: pointer;
`;

export const LogoContainer = styled.div`
  position: absolute;
  top: 50;
  left: 50;
  width: 80rem;
  height: 40rem;
  margin-top: 5rem;
  margin-left: 2rem;
  z-index: 1;


  @media (max-width: 450px) {
    width: 45rem;
    height: 25rem;
    margin-bottom: 5rem;
  }

  @media (max-width: 650px) {
    margin-bottom: 5rem;
  }
`;

export const BackgroundCanvas = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0; /* Ensure background canvas is behind other content */
  pointer-events: none; /* Prevent canvas from intercepting pointer events */
`;

export const Title = styled.h1`
  color: ${colors.seasalt};
  font-size: 3.8rem;
  margin: 0;
  letter-spacing: 1.0rem;
  text-transform: lowercase;
  padding: 0;
  font-weight: 300;
`;

export const ContactRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  align-items: flex-start;
  margin-bottom: 3rem;
`;

export const WebLink = styled.a`
  color: ${colors.seasalt};
  font-family: 'Carlito', 'Roboto Mono', monospace;
  font-size: 2.6rem;
  text-decoration-line: underline;
  text-underline-offset: 5px;
  margin-left: 0.4rem;
`;

export const Email = styled.p`
  color: ${colors.seasalt};
  margin: 0;
  padding: 0;
  font-size: 1.6rem;
  text-decoration: none;
  z-index: 3;
`;

export const CenterSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
