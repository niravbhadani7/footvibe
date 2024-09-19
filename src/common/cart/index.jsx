import React, { useState, useEffect } from "react";
import "./cart.scss";
import { IoMdArrowBack } from "react-icons/io";
import { MdClose } from "react-icons/md";
import categoryApi from "../../categoryApi/categoryApi";
import toast from "react-hot-toast";

function Cart() {
  const [cartData, setCartData] = useState([]);
  const [activeTab, setActiveTab] = useState("details");

  useEffect(() => {
    // Fetch cart data from localStorage
    const cartItems = JSON.parse(localStorage.getItem("cartData")) || [];
    if (cartItems.length > 0) {
      // Flatten categories and filter products based on cart items
      const products = categoryApi.flatMap((category) => category.product);
      const filteredProducts = products.filter((item) =>
        cartItems.includes(item.id)
      );
      setCartData(filteredProducts);
    }
  }, []);

  const backButton = () => {
    window.history.back();
  };

  const handleRemove = (id) => {
    const updatedCart = cartData.filter((item) => item.id !== id);
    setCartData(updatedCart); // Update state to re-render component
    localStorage.setItem(
      "cartData",
      JSON.stringify(updatedCart.map((item) => item.id))
    );
    toast.success("Item removed from cart");
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  if (cartData.length === 0) {
    return (
      <div className="empty-cart">
        <div className="back-btn">
          <IoMdArrowBack onClick={backButton} aria-label="Go back" />
        </div>
        <h1>Your cart is empty</h1>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="back-btn">
        <IoMdArrowBack onClick={backButton} aria-label="Go back" />
      </div>
      <h1>Cart</h1>
      {cartData.map((item, i) => (
        <div key={item.id} className="product-page">
          {/* Product Gallery Section */}
          <div className="gallery">
            <div className="main-image">
              <img src={item.image} alt={item.name} />
            </div>
          </div>

          {/* Product Info Section */}
          <div className="product-info">
            <div className="top-flex">
              <h2>{item.name}</h2>
              <MdClose
                className="remove-btn"
                onClick={() => handleRemove(item.id)}
                aria-label={`Remove ${item.name} from cart`}
              />
            </div>
            <p className="price">$ {item.discounted_price}</p>
            <div className="shoes-size">
              {item.size.map((size, index) => (
                <p key={index}>{size}</p>
              ))}
            </div>

            {/* Buy Now Button */}
            <button className="add-to-cart-data">Buy Now</button>

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

export default Cart;
