import React from "react";
import Slider from "react-slick";
import "./slideroffer.scss";
import Slider1 from "../../../assets/image/slider (1).jpg";
import Slider2 from "../../../assets/image/slider (2).jpg";
import Slider3 from "../../../assets/image/slider (3).jpg";
import Slider4 from "../../../assets/image/slider (4).jpg";
import Slider5 from "../../../assets/image/slider (5).jpg";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";



function SampleNextArrow(props) {
  const {onClick } = props;
  return (
    <div
      className="arrow arrow-right"
      onClick={onClick}
    ><FaArrowRight style={{color:"white", display:"block"}} className="right-icon"/></div>
  );
}

function SamplePrevArrow(props) {
  const {onClick} = props;
  return (
    <div
      className="arrow arrow-left"
      onClick={onClick}
    ><FaArrowLeft style={{color:"white", display:"block"}} className="left-icon"/></div>
  );
}
function Slideroffer() {

  var settings = {
    dots: true,
    infinite: true,
    cssEase: "ease-in-out",
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Slider {...settings} className="slideroffer">
      <div>
        <img src={Slider4} />
      </div>
      <div>
        <img src={Slider5} />
      </div>
      <div>
        <img src={Slider1} />
      </div>
      <div>
        <img src={Slider2} />
      </div>
      <div>
        <img src={Slider3} />
      </div>
    </Slider>
  );
}

export default Slideroffer;
