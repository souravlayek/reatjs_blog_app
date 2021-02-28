import React from "react";
import BigCard from "../../components/bigCard/BigCard";
import NavSection from "../../layouts/navSection/NavSection";
import SideBar from "../../layouts/sideBar/SideBar";
import Slider from "../../layouts/slider/Slider";
import "./css/homepage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <NavSection />
      <Slider />
      <div className="content">
        <div className="main">
          <BigCard />
          <BigCard />
          <BigCard />
          <BigCard />
          <BigCard />
          <BigCard />
          <BigCard />
        </div>
        <div className="sideSec">
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
