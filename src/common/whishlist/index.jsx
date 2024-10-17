import React from "react";
import "./whishlist.scss";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { addToCart } from "../../utils/cartUtils";

export default function Whishlist({ wishlistItems, removeFromWishlist }) {
  return (
    <div className="wishlist-container">
      <h1>Your Wishlist</h1>
      <div className="wishlist-items">
        {wishlistItems.map((item) => (
          <div key={item.id} className="wishlist-card">
            <Link
              className="wishlist-image"
              to={`/product`}
              onClick={() => {/* Handle product details navigation */}}
            >
              <img src={item.image} alt={item.name} />
            </Link>
            <div className="wishlist-details">
              <h3 className="wishlist-name">{item.name}</h3>
              <div className="price-sec">
                <p className="wishlist-price">${item.discounted_price}</p>
                <del>${item.original_price}</del>
                <span>{item.offer}</span>
              </div>
              <div className="wishlist-size">
                {item.size.map((size, index) => (
                  <p key={index}>{size}</p>
                ))}
              </div>
              <div className="wishlist-actions">
                <button
                  className="add-to-cart-btn"
                  onClick={() => addToCart(item.id)}
                >
                  Add to Cart
                </button>
                <MdClose
                  className="remove-from-wishlist"
                  onClick={() => removeFromWishlist(item.id)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
