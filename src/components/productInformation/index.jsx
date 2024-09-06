import React from "react";
import { useState } from "react";
import Shoes1 from "../../assets/image/cardshoes (1).webp";
import Shoes2 from "../../assets/image/cardshoes (2).webp";
import Shoes3 from "../../assets/image/cardshoes (3).webp";
import "./productInformation.scss";
import categoryApi from "../../categoryApi/categoryApi";

function ProductInfo() {
  const [activeTab, setActiveTab] = useState("details");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


const id = JSON.parse(localStorage.getItem("id"))

  const category = categoryApi[0].product;
 const data = category.filter((item) => item.id === id);
 console.log(id);
  return (
    <div>
      {data.map((item, i) => (
        <div key={i} className="product-page">
          {/* Product Gallery Section */}
          <div className="gallery">
            <div className="main-image">
              <img src={item.image} alt={item.name} />
            </div>
            {/* <div className="thumbnail-images">
          <img src={Shoes1} alt="Shoe Thumbnail 1" />
          <img src={Shoes2} alt="Shoe Thumbnail 2" />
          <img src={Shoes3} alt="Shoe Thumbnail 3" />
        </div> */}
          </div>
          {/* Product Info Section */}
          <div className="product-info">
            <h1>{item.name}</h1>
            <p className="price">{item.discounted_price}</p>
            <p className="description">{item.description}</p>

            {/* Size Selection */}
            <div className="size-selection">
              <label htmlFor="size">{item.sizeTitle}</label>
              <select id="size">
                <option value="">{item.sizeOption}</option>
                {item.size.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>

            {/* Add to Cart Button */}
            <button className="add-to-cart">{item.cart}</button>

            {/* Product Details and Reviews Tabs */}
            <div className="tab-container">
              <button
                onClick={() => handleTabClick("details")}
                className={activeTab === "details" ? "active" : ""}
              >
                {item.details}
              </button>
              <button
                onClick={() => handleTabClick("reviews")}
                className={activeTab === "reviews" ? "active" : ""}
              >
                {item.review}
              </button>

              <div className="tab-content">
                {activeTab === "details" && (
                  <div className="details">
                    <h3>{item.details}</h3>
                    <ul>
                      <li>Breathable mesh upper</li>
                      <li>Responsive foam midsole</li>
                      <li>Rubber outsole for traction</li>
                    </ul>
                  </div>
                )}
                {activeTab === "reviews" && (
                  <div className="reviews">
                    <h3>Customer Reviews</h3>
                    <p>No reviews yet.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductInfo;
