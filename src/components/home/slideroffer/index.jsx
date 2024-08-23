import React from "react";
import Slider from "react-slick";
import "./slideroffer.scss";
import Slider1 from '../../../assets/image/slider (1).jpg';
import Slider2 from '../../../assets/image/slider (2).jpg';
import Slider3 from '../../../assets/image/slider (3).jpg';
import Slider4 from '../../../assets/image/slider (4).jpg';
import Slider5 from '../../../assets/image/slider (5).jpg';

function Slideroffer() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    // cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="slideroffer">
      <div>
        <img src={Slider4}/>
      </div>
      <div>
        <img src={Slider5}/>
      </div>
      <div>
        <img src={Slider1}/>
      </div>
      <div>
        <img src={Slider2}/>
      </div>
      <div>
        <img src={Slider3}/>
      </div>

    </Slider>

  );
}

export default Slideroffer;
