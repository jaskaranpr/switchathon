import styled from "styled-components";
import { addDoc, collection } from "firebase/firestore";
import { firebaseDB } from "../../firebase.cofig";
import SearchIcon from "../../assets/icons/search.png";
import NftCard from "../../Components/NftCard";
import TopNftCard from "../../Components/TopNftCard";
import PopularCreatorCard from "../../Components/PopularCreatorCard";

const Home = () => {
  const handleOnClick = async () => {
    const docRef = await addDoc(collection(firebaseDB, "users"), {
      first: "Alan",
      middle: "Mathison",
      last: "Turing",

      born: 1912,
    });
  };
  return (
    <div className="flex-1 py-10 px-7 ">
      <div className="bg-white py-2 px-4 w-[40%] rounded-full flex items-center gap-2">
        <img src={SearchIcon} className="w-[15px]" />
        <input className="focus-within:outline-none flex-1" type="text" />
      </div>
      <div className="mt-4 flex gap-5">
        <NftCard
          image="https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=cb647d991d8897cc8a81d2c33c4406d5"
          coinImage="https://csk-genesis-stage.s3.ap-southeast-1.amazonaws.com/icons/coins/ethereum.svg"
          coinExt="ETH"
          price={9.04}
          likes={120}
          userName="Ofspace NFT"
          userId="ofspace99"
          title="NFT Cube Design #92"
          userImage="https://images.theconversation.com/files/417198/original/file-20210820-25-1j3afhs.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
        />
        <NftCard
          image="https://cdn.prod.www.spiegel.de/images/d2caafb1-70da-47e2-ba48-efd66565cde1_w996_r0.9975262832405689_fpx44.98_fpy48.86.jpg"
          coinImage="https://csk-genesis-stage.s3.ap-southeast-1.amazonaws.com/icons/coins/bitcoin.svg"
          coinExt="BTC"
          price={22.04}
          likes={120}
          userName="Ofspace NFT"
          userId="ofspace99"
          title="NFT Cube Design #93"
          userImage="https://images.wsj.net/im-491402?width=700&height=700"
        />
        <NftCard
          image="https://www.latercera.com/resizer/Jw37YLm2lX8o_akIpM57enxchxA=/arc-anglerfish-arc2-prod-copesa/public/XQP24CTNQND2TBDZ7AQN54D44Y.jpg"
          coinImage="https://csk-genesis-stage.s3.ap-southeast-1.amazonaws.com/icons/coins/ethereum.svg"
          coinExt="ETH"
          price={10.04}
          likes={120}
          userName="Ofspace NFT"
          userId="ofspace99"
          title="NFT Cube Design #94"
          userImage="https://images.theconversation.com/files/417198/original/file-20210820-25-1j3afhs.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
        />
      </div>
      <div className="mt-5">
        <TopNftCard
          values={[
            {
              userImage:
                "https://images.theconversation.com/files/417198/original/file-20210820-25-1j3afhs.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
              coinImage:
                "https://csk-genesis-stage.s3.ap-southeast-1.amazonaws.com/icons/coins/ethereum.svg",
              price: "4 030,98",
              percentage: -26.99,
              floorPrice: 0.99,
              items: 99,
              owners: "12.0k",
              rank: 1,
              userId: "@ofspace",
            },
            {
              userImage:
                "https://images.theconversation.com/files/417198/original/file-20210820-25-1j3afhs.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
              coinImage:
                "https://csk-genesis-stage.s3.ap-southeast-1.amazonaws.com/icons/coins/ethereum.svg",
              price: "4 030,98",
              percentage: -26.99,
              floorPrice: 0.99,
              items: 99,
              owners: "12.0k",
              rank: 1,
              userId: "@ofspace",
            },
          ]}
        />
        <PopularCreatorCard />
      </div>
    </div>
  );
};

export default Home;
