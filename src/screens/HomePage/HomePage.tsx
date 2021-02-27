import React from "react";
import BigCard from "../../components/bigCard/BigCard";
import NavSection from "../../layouts/navSection/NavSection";
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
        </div>
        <div className="sideSec"></div>
      </div>
    </div>
  );
};

export default HomePage;
