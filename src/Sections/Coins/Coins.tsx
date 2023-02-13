import useCoinCanvas from "../../Hooks/useCoinCanvas";
import { CoinContainer } from "./Coins.styled";

const Coins = () => {
  const ref = useCoinCanvas();




  return (
    <CoinContainer>
      <div ref={ref}></div>
    </CoinContainer>
  );
};

export default Coins;
