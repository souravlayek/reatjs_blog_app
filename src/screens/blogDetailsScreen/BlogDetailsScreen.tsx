import React, { useRef, useEffect } from "react";
import BlogContent from "../../components/blogcontent/BlogContent";
import RelatedBlog from "../../components/relatedBlog/RelatedBlog";
import CommentSection from "../../layouts/commentSection/CommentSection";
import SideBar from "../../layouts/sideBar/SideBar";
import "./css/blogdetailscreen.css";
interface Props {}

const BlogDetailsScreen = (props: Props) => {
  const blogScreen = useRef<any>(null);
  // useEffect(() => {
  //   (document.querySelector("body") as Element).scrollIntoView();
  // }, []);
  return (
    <div ref={blogScreen} className="blogDetailsScreen">
      <div className="main">
        <BlogContent />
        <div className="divider"></div>

        <div className="relatedbloglist">
          <div className="heading">You may also like</div>
          <div className="smallDevider"></div>
          <div className="blogList">
            <RelatedBlog />
            <RelatedBlog />
            <RelatedBlog />
            <RelatedBlog />
          </div>
        </div>
        <div className="divider"></div>
        <div className="commentsec">
          <CommentSection />
        </div>
      </div>
      <div className="side">
        <SideBar />
      </div>
    </div>
  );
};

export default BlogDetailsScreen;
