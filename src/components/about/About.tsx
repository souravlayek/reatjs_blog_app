import React from "react";
import "./css/about.css";
import girl from "../../assets/img/girl.jpg";
interface Props {}

const About = (props: Props) => {
  return (
    <div className="about">
      <div className="heading">About Us</div>
      <div className="smallDevider"></div>
      <div className="imgContainer">
        <img src={girl} alt="" />
      </div>
      <div className="aboutDesc">
        Hi I'm Adam! I'm a graphic designer by day, and I have a deep
        appreciation for minimalist art and design. Minimal Daily is the website
        where I share about cool minimalist things as I find them, and help
        others enjoy minimalist design as much as I do.
      </div>
    </div>
  );
};

export default About;
