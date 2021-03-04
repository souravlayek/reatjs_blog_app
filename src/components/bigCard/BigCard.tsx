import React from "react";
import "./css/bigcard.css";
import hello from "../../assets/img/hello.jpg";
import { MdNavigateNext } from "react-icons/md";
import { BiPencil } from "react-icons/bi";
import { BsClockFill } from "react-icons/bs";
import { Link } from "react-router-dom";

interface Props {
  image: string;
  link: string;
  tags: string[];
  title: string;
  author: string;
  time: string;
}

const BigCard = () => {
  return (
    <div className="bigcard">
      <div className="thumbnail">
        <img src={hello} alt="" />
        <Link to="/blog/j">
          <div className="view-more">
            View Post <MdNavigateNext className="arrow" color="white" />
          </div>
        </Link>
      </div>
      <div className="details">
        <div className="tags">
          in <span>Design,</span>
          <span>Design,</span>
        </div>
        <Link to="/blog/j">
          <div className="title">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit,
            neque voluptas.
          </div>
        </Link>
        <div className="authorandtime">
          <div className="time">
            <BsClockFill className="clock" /> June 14, 2020
          </div>
          <div className="author">
            <BiPencil className="pencil" /> Adam Amin
          </div>
        </div>
        <div className="desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
          delectus, sit a itaque neque doloremque totam eligendi dolorum dolorem
          labore iusto...
        </div>
      </div>
    </div>
  );
};

export default BigCard;
