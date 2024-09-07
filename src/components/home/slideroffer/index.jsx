import React from "react";
import Slider from "react-slick";
import "./slideroffer.scss";
import Slider1 from "../../../assets/image/slider (1).webp";
import Slider2 from "../../../assets/image/slider (2).webp";
import Slider3 from "../../../assets/image/slider (3).webp";
import Slider4 from "../../../assets/image/slider (4).jpg";
import Slider5 from "../../../assets/image/slider (5).webp";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

function Slideroffer() {

  var settings = {
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    waitForAnimate: false
  };
  return (
    <Slider {...settings} className="slideroffer">
      <div>
        <img src={Slider4} alt="sliderImg4"/>
      </div>
      <div>
        <img src={Slider5} alt="sliderImg5"/>
      </div>
      <div>
        <img src={Slider1} alt="sliderImg1"/>
      </div>
      <div>
        <img src={Slider2} alt="sliderImg2"/>
      </div>
      <div>
        <img src={Slider3} alt="sliderImg3"/>
      </div>
    </Slider>
  );
}

export default Slideroffer;
