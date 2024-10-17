import React, { useState, useEffect } from 'react'
import "./sale.scss";
import categoryApi from '../../categoryApi/categoryApi';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { addToCart } from "../../redux/cart/cart";
import { useDispatch } from "react-redux";

function Sale() {

    const [searchTerm, setSearchTerm] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(
      categoryApi[0].product
    ); // Initial state set to all products
    const dispatch = useDispatch();
    
  
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

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
      };

    return (
        <div className="sale-main">
            <div className="container">
                <div className="sale-search-main">
                    <div className="sale-search">
                        <input
                            type="text"
                            placeholder="Search"
                            className="sale-search-input"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                        <p className="sale-search-icon">
                            <BsSearch />
                        </p>
                    </div>
                </div>
                <div className="sale-card-main">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((item) => (
                            <div className="sale-card" key={item.id}>
                                <Link
                                    className="sale-image"
                                    onClick={() => openDetails(item.id)}
                                    to={`/product`}
                                >
                                    <img src={item.image} alt={item.name} />
                                </Link>
                                <div className="sale-details">
                                    <h3 className="sale-name">{item.name}</h3>
                                    <div className="sale-price-sec">
                                        <p className="sale-price">${item.discounted_price}</p>
                                        <del>${item.original_price}</del>
                                        <span>{item.offer}</span>
                                    </div>
                                    <div className="sale-size">
                                        {item.size.map((size, index) => (
                                            <p key={index}>{size}</p>
                                        ))}
                                    </div>
                                    <div className="sale-cart-wish">
                                        <button
                                            className="sale-add-to-cart-btn"
                                            onClick={() => handleAddToCart(item)}
                                        >
                                            Add to Cart
                                        </button>
                                        {item.wishList && (
                                            <item.wishList className="sale-fav-icon" />
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <span className="sale-no-products">No products available</span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Sale;