import React from "react";
import "./css/relatedblog.css";
import hello from "../../assets/img/hello.jpg";
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";

interface Props {}

const RelatedBlog = (props: Props) => {
  return (
    <div className="relatedBlog">
      <div className="thumbnail">
        <img src={hello} alt="" />
        <Link to="/blog/j">
          <div className="view-more">
            View Post <MdNavigateNext className="arrow" color="white" />
          </div>
        </Link>
      </div>
      <div className="details">
        <Link to="/blog/j">
          <div className="title">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit,
            neque voluptas.
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RelatedBlog;
