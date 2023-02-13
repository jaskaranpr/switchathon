import { useState } from "react";
import {
  animated,
  useIsomorphicLayoutEffect,
  useSpring,
} from "@react-spring/web";
import { AnimatedDiv, HeroContainer } from "./Hero.styled";

const Hero = () => {
  const [clicked, setClicked] = useState(false);
  const [springs, api] = useSpring(() => ({
    x: clicked ? 100 : 0,
  }));

  const handleClick = () => {
    setClicked(!clicked);
  };

  useIsomorphicLayoutEffect(() => {
    api.start({
      to: {
        x: clicked ? 100 : 0,
      },
    });
  }, [clicked]);

  return (
    <HeroContainer>
      <AnimatedDiv style={springs} />
      <animated.button onClick={handleClick}>
        {springs.x.to((x) => x.toFixed(0))}
      </animated.button>
    </HeroContainer>
  );
};

export default Hero;
