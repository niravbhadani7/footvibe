import React from "react";
import "./women.scss";
import { MdFavoriteBorder } from "react-icons/md";
import CardImg1 from '../../assets/image/cardshoes (1).webp'
import categoryApi from "../../categoryApi/categoryApi"


function Women() {
  
  return (
    <div className="womens-main">
      <div className="container">
        <div className="women-card-main">

          {categoryApi[0].product.map((item) =>  (<div class="shoes-card">
            <div class="shoes-image">
              <img src={item.image} alt="Stylish Shoe" />
            </div>
            <div class="shoes-details">
              <h3 class="shoes-name">{item.name}</h3>
              <div class="price-sec">
                <p class="shoes-price">{item.discounted_price}</p>
                <del>{item.original_price}</del>
                <span>{item.offer}</span>
              </div>
              <div className="shoes-size">
                {item.size.map ((item) => (<p>{item}</p>))}
              </div>
              <div className="cart-wish">
                <button class="add-to-cart-btn">{item.cart}</button>
                <item.wishList className="fav-icon"/>
              </div>
            </div>
          </div>))}
        </div>
      </div>
    </div>
  );
}

export default Women;
