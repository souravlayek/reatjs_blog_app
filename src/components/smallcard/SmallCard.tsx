import React from "react";
import { MdNavigateNext } from "react-icons/md";
import "./css/smallcard.css";
import hello from "../../assets/img/hello.jpg";

interface Props {}

const SmallCard = (props: Props) => {
  return (
    <div className="smallcard">
      <div className="thumbnail">
        <img src={hello} alt="" />
        <div className="view-more">
          View <MdNavigateNext className="arrow" color="white" />
        </div>
      </div>
      <div className="details">
        <div className="title">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, neque
          voluptas.
        </div>
        <div className="timestamp">June 14, 2020</div>
      </div>
    </div>
  );
};

export default SmallCard;
