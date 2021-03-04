import React from "react";
import { MdNavigateNext } from "react-icons/md";
import { useParams } from "react-router-dom";
import BigCard from "../../components/bigCard/BigCard";
import SideBar from "../../layouts/sideBar/SideBar";
import "./css/catagoryscreen.css";
interface Props {}

const CatagoryScreen = (props: Props) => {
  const params = useParams<{ cat: string }>();
  return (
    <div className="categoryScreen">
      <div className="content">
        <div className="main">
          <div className="catagorySection">
            <div className="heading">{params.cat}</div>
            <div className="catList">
              <div className="catItem active">Uncatagorized</div>
              <div className="catItem">Tips</div>
              <div className="catItem">Living</div>
              <div className="catItem">Essentials</div>
              <div className="catItem">Design</div>
              <div className="catItem">Best List</div>
            </div>
          </div>
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
    </div>
  );
};

export default CatagoryScreen;
