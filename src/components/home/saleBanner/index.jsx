import React from "react";
import "./saleBanner.scss";
import saleBanner1 from "../../../assets/image/sale (1).webp";
import saleBanner2 from "../../../assets/image/sale (2).webp";
import saleBanner3 from "../../../assets/image/sale (3).webp";
import { useNavigate } from "react-router-dom";

function SaleBanner() {

  const navigate = useNavigate();
  return (
    <div className="sale-banner ">
      <div className="sale-banner-img">
        <div className="sale-banner-img-item">
          <img src={saleBanner1} alt="sale-banner" />
          <div className="sale-banner-layer"></div>
          <div className="sale-banner-text">
            <p>Sale</p>
            <h1>UPTO 60% OFF</h1>
          </div>
          <button className="sale-banner-button" onClick={() => navigate('/sale')}>SHOP NOW</button>
        </div>
        <div className="sale-banner-img-item">
          <img src={saleBanner3} alt="sale-banner" />
          <div className="sale-banner-layer"></div>
          <div className="sale-banner-text">
            <p>Sale</p>
            <h1>UPTO 50% OFF</h1>
          </div>
          <button className="sale-banner-button" onClick={() => navigate('/sale')}>SHOP NOW</button>
        </div>
        <div className="sale-banner-img-item">
          <img src={saleBanner2} alt="sale-banner" />
          <div className="sale-banner-layer"></div>
          <div className="sale-banner-text">
            <p>Sale</p>
            <h1>UPTO 30% OFF</h1>
          </div>
          <button className="sale-banner-button" onClick={() => navigate('/sale')}>SHOP NOW</button>
        </div>
      </div>
    </div>
  );
}

export default SaleBanner;
