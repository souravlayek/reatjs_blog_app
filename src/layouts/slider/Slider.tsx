import React from 'react'
import SliderItem from '../../components/slider/SliderItem'
import './css/slider.css'
import {MdNavigateNext} from "react-icons/md"


interface Props {

}

const Slider = (props: Props) => {
  return (
    <div className="slider">
      <div className="button left">
        <MdNavigateNext className="leftarrow" size="40px" />
      </div>
      <div className="button right">
        <MdNavigateNext className="rightarrow" size="40px" />
      </div>
      <SliderItem />
    </div>
  )
}

export default Slider
