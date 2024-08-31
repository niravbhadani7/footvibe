import React, { useState } from "react";
import "./cart.scss";
import SearchBar from "../common/searchbar";
import cartDataApi from "./cartApi/cartApi";

function Cart() {
  const [filteredProducts, setFilteredProducts] = useState(cartDataApi);

  const handleSearch = (searchTerm) => {
    const filtered = cartDataApi.filter(product =>
      product.name.toUpperCase().includes(searchTerm.toUpperCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="cart">
        {
          filteredProducts.length === 0 ? <h1>Cart is empty</h1> :
          filteredProducts.map((item) => (
            <div className="cart-card" key={item.id}>
              {/* <div className="cart-img">
                <img src={item.image} alt="cart-image" />
              </div> */}
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <p>{item.quantity}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Cart;
