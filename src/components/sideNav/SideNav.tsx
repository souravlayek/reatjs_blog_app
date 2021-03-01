import React from "react";
import "./css/sideNav.css";
import { GrFormClose } from "react-icons/gr";
import { RiFacebookCircleLine, RiInstagramLine } from "react-icons/ri";
import { CSSTransition } from "react-transition-group";
import SmallCard from "../smallcard/SmallCard";

interface Props {
  openStatus: boolean;
  close: () => void;
}

const SideNav = (props: Props) => {
  const closeHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.persist();
    const target: Element = e.target as Element;
    if (typeof target.className === "string") {
      if (target.className.includes("sideNav")) {
        props.close();
      }
    }
  };

  return (
    <CSSTransition
      in={props.openStatus}
      out={props.openStatus}
      onEntering={() =>
        ((document.querySelector("body") as HTMLElement).style.overflow =
          "hidden")
      }
      onExiting={() =>
        ((document.querySelector("body") as HTMLElement).style.overflow = "")
      }
      timeout={1000}
      classNames="active"
      unmountOnExit
    >
      <div onClick={(e) => closeHandler(e)} className="sideNav">
        <div className="sidebar">
          <div onClick={props.close} className="closeBtn">
            <GrFormClose size="25px" />
          </div>
          <div className="navlinks">
            <div className="nav-link-item">design</div>
            <div className="nav-link-item">list</div>
            <div className="nav-link-item">living</div>
            <div className="nav-link-item">essentials</div>
            <div className="nav-link-item">tips</div>
            <div className="nav-link-item">about</div>
          </div>
          <div className="social">
            <div className="social-head">Social</div>
            <div className="social-links">
              <div className="s-links">
                <RiFacebookCircleLine />
              </div>
              <div className="s-links">
                <RiInstagramLine />
              </div>
            </div>
          </div>
          <div className="latest-articles">
            <div className="heading">Latest Articles</div>
            <div className="articles">
              <SmallCard />
              <SmallCard />
              <SmallCard />
              <SmallCard />
              <SmallCard />
              <SmallCard />
              <SmallCard />
              <SmallCard />
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default SideNav;
