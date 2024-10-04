import React from "react";
import "./item.scss";
import ItemCard1 from "../../../assets/image/item-card (1).webp";
import ItemCard2 from "../../../assets/image/item-card (2).webp";
import ItemCard3 from "../../../assets/image/item-card (3).webp";
import { useNavigate } from "react-router-dom";

export default function Item() {

  const navigate = useNavigate();
  
  return (
    <div className="item-main">
        <img src={ItemCard1} alt="item-card" onClick={() => navigate("/men")}/>
      <img src={ItemCard2} alt="item-card" onClick={() => navigate("/women")}/>
      <img src={ItemCard3} alt="item-card" onClick={() => navigate("/kids")}/>
    </div>
  );
}
