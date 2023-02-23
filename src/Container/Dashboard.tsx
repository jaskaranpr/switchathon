import React from "react";
import LeftBar from "../Components/LeftBar";
import RightBar from "../Components/RightBar";
import Home from "../Pages/Home";

const Dashboard = () => {
  return (
    <div className="w-full divide-solid h-[100vh] flex">
      <LeftBar />
      <Home />
      <RightBar />
    </div>
  );
};

export default Dashboard;
