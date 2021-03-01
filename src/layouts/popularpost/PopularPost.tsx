import React from "react";
import SmallCard from "../../components/smallcard/SmallCard";
import "./css/popularpost.css";
interface Props {}

const PopularPost = (props: Props) => {
  return (
    <div className="popularpost">
      <div className="heading">Popular Posts</div>
      <div className="smallDevider"></div>
      <div className="postList">
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
      </div>
    </div>
  );
};

export default PopularPost;
