import React from "react";
import About from "../../components/about/About";
import Newsletter from "../../components/newsletter/Newsletter";
import SmallSearch from "../../components/smallSearch/SmallSearch";
import PopularPost from "../popularpost/PopularPost";
import "./css/sidebar.css";
interface Props {}

const SideBar = (props: Props) => {
  return (
    <div className="sidebar">
      <SmallSearch />
      <div className="divider"></div>
      <About />
      <div className="divider"></div>
      <Newsletter />
      <div className="divider"></div>
      <PopularPost />
    </div>
  );
};

export default SideBar;
