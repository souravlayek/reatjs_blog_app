import React from "react";
import "./css/comment.css";
interface Props {
  commentType: "mainComment" | "subComment";
}

const Comment = (props: Props) => {
  return (
    <div className={"comments " + props.commentType}>
      <div className="text">I have commented here</div>
      <div className="details">
        <div className="author">Rocky Handsome</div>
        <div className="time">{new Date().toLocaleString()}</div>
      </div>
    </div>
  );
};

export default Comment;
