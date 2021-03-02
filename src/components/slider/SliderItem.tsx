import React from "react";
import "./css/slideritem.css";
import { MdNavigateNext } from "react-icons/md";
import hello from "../../assets/img/hello.jpg";

interface Props {
  tags: string[];
  title: string;
  link: string;
  image: string;
}

const SliderItem = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to Top, #00000045, #00000045),url(${hello})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="sliderItem"
    >
      <div className="tags">
        in <span>Design,</span>
        <span>Design,</span> <span>Design</span>
      </div>
      <div className="title">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel,
        voluptatum cum.
      </div>
      <div className="button">
        View Post <MdNavigateNext className="arrow" color="white" />
      </div>
    </div>
  );
};

export default SliderItem;
