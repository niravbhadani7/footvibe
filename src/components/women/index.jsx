import React, { useState } from "react";
import "./women.scss";
import categoryApi from "../../categoryApi/categoryApi";
import { BsSearch } from "react-icons/bs";
import {  Link } from "react-router-dom";
import toast from "react-hot-toast";

function Women() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(
    categoryApi[0].product
  ); // Initial state set to all products

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    // Filter products based on search term
    const filtered = categoryApi[0].product.filter(
      (product) =>
        product.name && product.name.toUpperCase().includes(term.toUpperCase())
    );
    setFilteredProducts(filtered); // Update the state with filtered products
  };

  const openDetails = (i) => {
    localStorage.setItem("id", JSON.stringify(i));
    // sessionStorage.setItem("scrollPosition", window.pageYOffset);
  };

  const addToCart = (i) => {
    const cartData = JSON.parse(localStorage.getItem("cartData")) || [];
    if (cartData.find((el) => el === i)) {
      toast.error("Item already in cart");
    } else {
      cartData.push(i);
      localStorage.setItem("cartData", JSON.stringify(cartData));
      toast.success("Item added to cart");
      window.location.reload();
    }
  } 

  return (
    <div className="womens-main">
      <div className="container">
        <div className="women-search-main">
          <div className="women-search">
            <input
              type="text"
              placeholder="Search"
              className="search-input"
              value={searchTerm}
              onChange={handleSearch} // Updates searchTerm and filtered products
            />
            <BsSearch className="women-search-icon" />
          </div>
        </div>
        <div className="women-card-main">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <div className="shoes-card">
                <Link
                  className="shoes-image"
                  to={`/product`}
                  onClick={() => openDetails(item.id)}
                  key={item.id}
                >
                  <img src={item.image} alt={item.name} />
                </Link>
                <div className="shoes-details">
                  <h3 className="shoes-name">{item.name}</h3>
                  <div className="price-sec">
                    <p className="shoes-price">{item.discounted_price}</p>
                    <del>{item.original_price}</del>
                    {item.offer ? (
                      <span>{item.offer}</span>
                    ) : (
                      <span>No offer available</span>
                    )}
                  </div>
                  <div className="shoes-size">
                    {item.size.length > 0 ? (
                      item.size.map((size, index) => <p key={index}>{size}</p>)
                    ) : (
                      <p>No sizes available</p>
                    )}
                  </div>
                  <div className="cart-wish">
                    <button className="add-to-cart-btn" onClick={() => addToCart(item.id)}>
                      {item.cart ? item.cart : "Add to cart"}
                    </button>
                    {item.wishList ? (
                      <item.wishList className="fav-icon" />
                    ) : (
                      <span>No wishlist available</span>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <span>No Products Available</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Women;
