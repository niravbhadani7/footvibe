import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import categoryApi from "../../categoryApi/categoryApi";
import toast from "react-hot-toast";
import "./kids.scss";

function Kids() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(categoryApi[2].product);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filtered = categoryApi[2].product.filter(
      (product) =>
        product.name && product.name.toUpperCase().includes(term.toUpperCase())
    );
    setFilteredProducts(filtered);
  };

  const openDetails = (id) => {
    localStorage.setItem("id", JSON.stringify(id));
  };

  const addToCart = (id) => {
    const cartData = JSON.parse(localStorage.getItem("cartData")) || [];
    if (cartData.find((el) => el === id)) {
      toast.error("Item already in cart");
    } else {
      cartData.push(id);
      localStorage.setItem("cartData", JSON.stringify(cartData));
      toast.success("Item added to cart");
    }
  };
  
  return (
    <div className="kids">
      <div className="container">
        <div className="kids-search-main">
          <div className="kids-search">
            <input
              type="text"
              placeholder="Search"
              className="search-input"
              value={searchTerm}
              onChange={handleSearch}
            />
            <p className="kids-search-icon">
              <BsSearch />
            </p>
          </div>
        </div>
        <div className="kids-card-main">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <div className="shoes-card" key={item.id}>
                <Link
                  className="shoes-image"
                  onClick={() => openDetails(item.id)}
                  to={`/product`}
                >
                  <img src={item.image} alt={item.name} />
                </Link>
                <div className="shoes-details">
                  <h3 className="shoes-name">{item.name}</h3>
                  <div className="price-sec">
                    <p className="shoes-price">${item.discounted_price}</p>
                    <del>${item.original_price}</del>
                    <span>{item.offer}</span>
                  </div>
                  <div className="shoes-size">
                    {item.size.map((size, index) => (
                      <p key={index}>{size}</p>
                    ))}
                  </div>
                  <div className="cart-wish">
                    <button
                      className="add-to-cart-btn"
                      onClick={() => addToCart(item.id)}
                    >
                      Add to Cart
                    </button>
                    {item.wishList && (
                      <item.wishList className="fav-icon" />
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <span>No products available</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Kids;