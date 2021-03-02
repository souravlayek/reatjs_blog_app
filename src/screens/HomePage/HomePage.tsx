import React from "react";
import { MdNavigateNext } from "react-icons/md";
import BigCard from "../../components/bigCard/BigCard";
import Footer from "../../components/footer/Footer";
// import NavSection from "../../layouts/navSection/NavSection";
import SideBar from "../../layouts/sideBar/SideBar";
import Slider from "../../layouts/slider/Slider";
import "./css/homepage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* <NavSection /> */}
      <Slider />
      <div className="content">
        <div className="main">
          <div className="articles">
            <BigCard />
            <BigCard />
            <BigCard />
            <BigCard />
            <BigCard />
            <BigCard />
            <BigCard />
            <BigCard />
            <BigCard />
            <BigCard />
          </div>
          <div className="pagination">
            <div className="pageNum active">
              <span>1</span>
            </div>
            <div className="pageNum">2</div>
            <div className="pageNum">3</div>
            <div className="dots">...</div>
            <div className="pageNum">8</div>
            <div className="next">
              Next
              <MdNavigateNext className="arrow" color="#ccc" />
            </div>
          </div>
        </div>
        <div className="sideSec">
          <SideBar />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
