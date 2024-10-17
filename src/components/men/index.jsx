import React, { useState } from "react";
import "./men.scss";
import categoryApi from "../../categoryApi/categoryApi";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/cart";

function Men() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(
    categoryApi[1].product
  ); // Initial state set to all products
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    // Filter products based on search term
    const filtered = categoryApi[1].product.filter(
      (product) =>
        product.name && product.name.toUpperCase().includes(term.toUpperCase())
    );
    setFilteredProducts(filtered); // Update the state with filtered products
  };

  const openDetails = (i) => {
    localStorage.setItem("id", JSON.stringify(i));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className="mens-main">
      <div className="container">
        <div className="men-search-main">
          <div className="men-search">
            <input
              type="text"
              placeholder="Search"
              className="search-input"
              value={searchTerm}
              onChange={handleSearch} // Updates searchTerm and filtered products
            />
            <p className="men-search-icon">
              <BsSearch />
            </p>
          </div>
        </div>
        <div className="men-card-main">
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
                      onClick={() => handleAddToCart(item)}
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

export default Men;
