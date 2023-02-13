import { animated } from "@react-spring/web";
import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-content: center;
`;

export const AnimatedDiv = styled(animated.div)`
  width: 80px;
  height: 80px;
  background: #ff6d6d;
  border-radius: 8px;
`;
