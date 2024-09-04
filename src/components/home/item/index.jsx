import React from "react";
import "./item.scss";
import ItemCard1 from "../../../assets/image/item-card (1).webp";
import ItemCard2 from "../../../assets/image/item-card (2).webp";
import ItemCard3 from "../../../assets/image/item-card (3).webp";

export default function Item() {
  return (
    <div className="item-main">
      <img src={ItemCard1} alt="item-card" />
      <img src={ItemCard2} alt="item-card" />
      <img src={ItemCard3} alt="item-card" />
    </div>
  );
}
