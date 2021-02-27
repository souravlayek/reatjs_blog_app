import React, { useRef } from "react";
import SliderItem from "../../components/slider/SliderItem";
import "./css/slider.css";
import { MdNavigateNext } from "react-icons/md";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
interface Props {}

const Slider = (props: Props) => {
  const slider = useRef<any>(null);

  const items = [
    <SliderItem />,
    <SliderItem />,
    <SliderItem />,
    <SliderItem />,
  ];
  return (
    <div className="slider">
      <div onClick={() => slider.current.slidePrev()} className="button left">
        <MdNavigateNext className="leftarrow" size="40px" />
      </div>
      <div onClick={() => slider.current.slideNext()} className="button right">
        <MdNavigateNext className="rightarrow" size="40px" />
      </div>
      <AliceCarousel
        animationDuration={500}
        ref={slider}
        infinite={true}
        disableDotsControls={true}
        disableButtonsControls={true}
        autoPlay={true}
        autoPlayDirection="ltr"
        autoPlayInterval={3000}
        items={items}
      />
    </div>
  );
};

export default Slider;
