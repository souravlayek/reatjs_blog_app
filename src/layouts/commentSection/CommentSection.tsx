import React, { useRef } from "react";
import Comment from "../../components/comment/Comment";
import "./css/commentSection.css";
interface Props {}

const CommentSection = (props: Props) => {
  const commentForm = useRef<any>(null);
  const nameInput = useRef<any>(null);
  return (
    <div className="comment-section">
      <div className="no-comment">
        No Comments
        <div className="smallDevider"></div>
      </div>
      <div className="allcomments">
        <div className="cmntItem">
          <Comment commentType="mainComment" />
          <Comment commentType="subComment" />
          <div
            onClick={() => {
              commentForm.current.scrollIntoView();
              nameInput.current.focus();
            }}
            className="replyBtn"
          >
            Reply
          </div>
        </div>
        <div className="cmntItem">
          <Comment commentType="mainComment" />
          <Comment commentType="subComment" />
          <div
            onClick={() => {
              commentForm.current.scrollIntoView();
              nameInput.current.focus();
            }}
            className="replyBtn"
          >
            Reply
          </div>
        </div>
        <div className="cmntItem">
          <Comment commentType="mainComment" />
          <Comment commentType="subComment" />
          <div
            onClick={() => {
              commentForm.current.scrollIntoView();
              nameInput.current.focus();
            }}
            className="replyBtn"
          >
            Reply
          </div>
        </div>
        <div className="cmntItem">
          <Comment commentType="mainComment" />
          <Comment commentType="subComment" />
          <div
            onClick={() => {
              commentForm.current.scrollIntoView();
              nameInput.current.focus();
            }}
            className="replyBtn"
          >
            Reply
          </div>
        </div>
      </div>
      <div ref={commentForm} className="commentForm">
        <div className="heading">
          Leave a comment
          <div className="smallDevider"></div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            ref={nameInput}
            placeholder="Your Name*"
            type="text"
            name="name"
            required
          />
          <textarea placeholder="Your Comment*" rows={8} name="message" />
          <button type="submit">Post Comment</button>
        </form>
      </div>
    </div>
  );
};

export default CommentSection;
