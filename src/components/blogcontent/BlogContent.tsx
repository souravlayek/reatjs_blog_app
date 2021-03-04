import React, { useEffect, useRef, useState } from "react";
import { BiPencil } from "react-icons/bi";
import { BsClockFill } from "react-icons/bs";
import { AiFillHeart, AiOutlineFileDone } from "react-icons/ai";
import { FaShare, FaFacebookF, FaTwitter, FaCopy } from "react-icons/fa";
import "./css/blogcontent.css";
import data from "../../assets/data.json";
import Clipboard from "react-clipboard.js";
import { CSSTransition } from "react-transition-group";

interface Props {}

const BlogContent = (props: Props) => {
  const [copyData, setCopyData] = useState({
    text: "I will be copied",
    done: false,
  });

  const blogbody = useRef<any>(null);
  const stickyShare = useRef<any>(null);
  const webshare = useRef<any>(null);
  const webshare2 = useRef<any>(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (blogbody !== null) {
        if (blogbody.current !== null) {
          if (blogbody.current.offsetTop <= window.scrollY) {
            if (
              blogbody.current.offsetTop + blogbody.current.clientHeight <=
              window.scrollY
            ) {
              if (stickyShare !== null) {
                stickyShare.current.style.position = "fixed";
                stickyShare.current.style.top = "10px";
                stickyShare.current.style.transform = `translateY(-${
                  window.scrollY -
                  (blogbody.current.offsetTop + blogbody.current.clientHeight) +
                  150
                }px)`;
              }
            } else {
              stickyShare.current.style.transform = `translateY(0px)`;
            }
            if (stickyShare !== null) {
              stickyShare.current.style.position = "fixed";
              stickyShare.current.style.top = "10px";
            }
          } else {
            stickyShare.current.style.position = "sticky";
          }
        }
      }
    });
  }, [blogbody]);
  const shareHandler = () => {
    if (webshare.current.style.display === "inline-block") {
      webshare.current.style.display = "none";
    } else {
      webshare.current.style.display = "inline-block";
    }
  };
  const mobShareHandler = () => {
    if (webshare2.current.style.display === "flex") {
      webshare2.current.style.display = "none";
    } else {
      webshare2.current.style.display = "flex";
    }
  };
  const updateHandler = () => {
    setCopyData((prev) => ({ ...prev, done: !prev.done }));
  };
  return (
    <div className="blogContent">
      <div className="header">
        <div className="tags">
          in <span>Essentials,</span>
          <span> Design</span>
        </div>
        <div className="title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, hic
          nulla!
        </div>
        <div className="authorandtime">
          <div className="time">
            <BsClockFill className="clock" /> June 14, 2020
          </div>
          <div className="author">
            <BiPencil className="pencil" /> Adam Amin
          </div>
        </div>
        {/* <div className="mobShareHead">
          Share:
          <div onClick={shareHandler} className="shareBtn share">
            <FaShare />
          </div>
        </div> */}
      </div>
      <div className="thumbnail">
        <img src={require("../../assets/img/hello.jpg").default} alt="" />
      </div>
      <div ref={blogbody} className="body">
        <div className="socialshare">
          <div ref={stickyShare} className="sticky">
            <div className="shareBtn like">
              <AiFillHeart />
              <div className="count">200</div>
            </div>
            <div onClick={shareHandler} className="shareBtn share">
              <FaShare />
              {/* <div className="count">200</div> */}
            </div>
            <div ref={webshare} className="webshare">
              <div className="shareBtn facebook">
                <FaFacebookF />
              </div>
              <div className="shareBtn twitter">
                <FaTwitter />
              </div>
              <div
                className={
                  copyData.done
                    ? "shareBtn copylink active"
                    : "shareBtn copylink"
                }
              >
                <Clipboard
                  onSuccess={() =>
                    setCopyData((prev) => ({ ...prev, done: true }))
                  }
                  data-clipboard-text="I'll be copied"
                >
                  <CSSTransition
                    classNames="copy"
                    in={copyData.done}
                    timeout={2000}
                    onEntered={updateHandler}
                    // onExited={updateHandler}
                  >
                    {copyData.done ? (
                      <AiOutlineFileDone size="18px" />
                    ) : (
                      <FaCopy />
                    )}
                  </CSSTransition>
                </Clipboard>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bodyContent"
          dangerouslySetInnerHTML={{ __html: data.data }}
        ></div>
      </div>
      <div className="mobshare">
        <div className="shareText">
          Like & Share with your friends and family..
        </div>
        <div className="shareIcon">
          <div className="buttons">
            <div className="shareBtn like">
              <AiFillHeart />
              <div className="count">200</div>
            </div>
            <div onClick={mobShareHandler} className="shareBtn share">
              <FaShare />
            </div>
          </div>
          <div ref={webshare2} className="webshare">
            <div className="shareBtn facebook">
              <FaFacebookF />
            </div>
            <div className="shareBtn twitter">
              <FaTwitter />
            </div>
            <div
              className={
                copyData.done ? "shareBtn copylink active" : "shareBtn copylink"
              }
            >
              <Clipboard
                onSuccess={() =>
                  setCopyData((prev) => ({ ...prev, done: true }))
                }
                data-clipboard-text="I'll be copied"
              >
                <CSSTransition
                  classNames="copy"
                  in={copyData.done}
                  timeout={2000}
                  onEntered={updateHandler}
                  // onExited={updateHandler}
                >
                  {copyData.done ? (
                    <AiOutlineFileDone size="18px" />
                  ) : (
                    <FaCopy />
                  )}
                </CSSTransition>
              </Clipboard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
