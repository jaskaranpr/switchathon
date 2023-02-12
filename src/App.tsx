import { useState } from "react";
import "./App.css";
import {
  animated,
  useIsomorphicLayoutEffect,
  useSpring,
} from "@react-spring/web";

function App() {
  const [clicked, setClicked] = useState(false);
  const [springs, api] = useSpring(() => ({
    x: clicked ? 100 : 0,
  }));

  const handleClick = () => {
    setClicked(!clicked);
  };

  console.log(springs.x.to(x => x.toFixed(0)))

  useIsomorphicLayoutEffect(() => {
    api.start({
      to: {
        x: clicked ? 100 : 0,
      },
    });
  }, [clicked]);

  return (
    <div>
      <animated.div
        style={{
          width: 80,
          height: 80,
          background: "#ff6d6d",
          borderRadius: 8,
          ...springs,
        }}
      />
      <animated.button onClick={handleClick}>{springs.x.to(x => x.toFixed(0))}</animated.button>
    </div>
  );
}

export default App;
