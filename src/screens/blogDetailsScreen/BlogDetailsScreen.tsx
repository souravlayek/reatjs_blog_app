import React, { useRef, useEffect } from "react";
import BlogContent from "../../components/blogcontent/BlogContent";
import SideBar from "../../layouts/sideBar/SideBar";
import "./css/blogdetailscreen.css";
interface Props {}

const BlogDetailsScreen = (props: Props) => {
  const blogScreen = useRef<any>(null);
  useEffect(() => {
    (document.querySelector("body") as Element).scrollIntoView();
  }, []);
  return (
    <div ref={blogScreen} className="blogDetailsScreen">
      <div className="main">
        <BlogContent />
      </div>
      <div className="side">
        <SideBar />
      </div>
    </div>
  );
};

export default BlogDetailsScreen;
