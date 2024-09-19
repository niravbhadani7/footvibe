import React, { useState, useEffect } from "react";
import Shoes1 from "../../assets/image/cardshoes (1).webp";
import Shoes2 from "../../assets/image/cardshoes (2).webp";
import Shoes3 from "../../assets/image/cardshoes (3).webp";
import "./productInformation.scss";
import { IoMdArrowBack } from "react-icons/io";
import categoryApi from "../../categoryApi/categoryApi";
import toast from "react-hot-toast";

function ProductInfo() {
  const [activeTab, setActiveTab] = useState("details");
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("id"));
    if (id) {
      const product = categoryApi
        .flatMap((category) => category.product)
        .find((item) => item.id === id);
      setProductData(product || null);
    }
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const backButton = () => {
    window.history.back();
  };

  const addToCart = (id) => {
    const cartData = JSON.parse(localStorage.getItem("cartData")) || [];
    if (cartData.includes(id)) {
      toast.error("Item already in cart");
    } else {
      cartData.push(id);
      localStorage.setItem("cartData", JSON.stringify(cartData));
      toast.success("Item added to cart");
    }
  };

  if (!productData) {
    return <p>Product not found</p>;
  }

  return (
    <div className="product-info-page">
      {/* Back Button */}
      <div className="back-btn">
        <IoMdArrowBack onClick={backButton} aria-label="Go back" />
      </div>

      {/* Product Details */}
      <div className="product-page">
        {/* Product Gallery Section */}
        <div className="gallery">
          <div className="main-image">
            <img src={productData.image} alt={productData.name} />
          </div>
          {/* Thumbnail images (optional) */}
          {/* 
          <div className="thumbnail-images">
            <img src={Shoes1} alt="Shoe Thumbnail 1" />
            <img src={Shoes2} alt="Shoe Thumbnail 2" />
            <img src={Shoes3} alt="Shoe Thumbnail 3" />
          </div>
          */}
        </div>

        {/* Product Info Section */}
        <div className="product-info">
          <h1>{productData.name}</h1>
          <p className="price">${productData.discounted_price}</p>
          <p className="description">{productData.description}</p>

          {/* Size Selection */}
          <div className="shoes-size">
            {productData.size.map((size, index) => (
              <p key={index}>{size}</p>
            ))}
          </div>

          {/* Add to Cart Button */}
          <button
            className="add-to-cart"
            onClick={() => addToCart(productData.id)}
          >
            {productData.cart}
          </button>

          {/* Product Details and Reviews Tabs */}
          <div className="tab-container">
            <button
              onClick={() => handleTabClick("details")}
              className={activeTab === "details" ? "active" : ""}
            >
              {productData.details}
            </button>
            <button
              onClick={() => handleTabClick("reviews")}
              className={activeTab === "reviews" ? "active" : ""}
            >
              {productData.review}
            </button>

            {/* Tab Content */}
            <div className="tab-content">
              {activeTab === "details" && (
                <div className="details">
                  <h3>{productData.details}</h3>
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
    </div>
  );
}

export default ProductInfo;
