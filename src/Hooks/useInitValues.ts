import { useEffect } from "react";
import { useScrollHandler } from "../Store/scrollHandler";
import { useWindowDimentions } from "../Store/windowDimentions";

const useInitValues = () => {
  const { setScrollY } = useScrollHandler();
  const { setWindowDimentions } = useWindowDimentions();
  useEffect(() => {
    const handleScroll = (e: Event) => {
      setScrollY(window.pageYOffset);
    };
    const handleWindowResize = () => {
      setWindowDimentions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    if (window) {
      window.addEventListener("scroll", handleScroll, { passive: true });
      window.addEventListener("resize", handleWindowResize);
      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleWindowResize);
      };
    }
  }, []);
};

export default useInitValues;
