import styled from "styled-components";

const MainCon = styled.div`
  border: 1px solid green;
`;
const Home = () => {
  return (
    <MainCon className="flex-1 py-10 px-7 ">
      <div className="bg-white py-2 px-3 w-[50%] rounded-full">
        <input className="focus-within:outline-none" type="text" />
      </div>
    </MainCon>
  );
};

export default Home;
