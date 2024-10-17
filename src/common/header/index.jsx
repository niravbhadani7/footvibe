import React, { useEffect, useRef, useState } from "react";
import "./header.scss";
import Logo from '../../assets/logo/logo (1).svg'
import { IoCartOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import categoryApi from "../../categoryApi/categoryApi";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { useSelector } from "react-redux";

const category = categoryApi;
function Header() {
 
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openNav = () => {
    setIsNavOpen(true);
    document.body.style.overflowY = "hidden";
    // .slideroffer
    document.querySelector(".slideroffer").style.zIndex = "-1";
  };

  const closeNav = () => {
    setIsNavOpen(false);
    document.body.style.overflowY = "auto";
    document.querySelector(".slideroffer").style.zIndex = "0";
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  


  const cartCount = useSelector(state => state.cart.cartCount);
  


  return (
    <header>
      <div className={`sidenav ${isNavOpen ? "open" : ""}`}>
        <div className="menu-header">
          <div className="menu-text">MENU</div>
          <div className="closebtn" onClick={closeNav}>
            &times;
          </div>
        </div>
        <Link className="menu-item" to={"/"}>
          Home
        </Link>
        <div className="menu-item category" onClick={toggleDropdown}>
          Category
          <FaCaretDown />
        </div>
        <div className={`dropdown-category ${dropdownOpen ? "open" : ""}`}>
          {category.map((item, index) => {
            return (
              <Link to={item.path} key={index} onClick={closeNav}>
                {item.category}
              </Link>
            );
          })}
        </div>
        <Link className="menu-item" to={"/shop"} onClick={closeNav}>
          Shop
        </Link>
        <Link className="menu-item" to={"/signup"} onClick={closeNav} >
          Profile{" "}
        </Link>
      </div>
      <div className="container">
        <div className="header-main">
          <div className="header-logo">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </div>
          <div className="menu-item">
            {category.map((item) => {
              return (
                <div className="hide" key={item.category}>
                  <Link to={item.path}>{item.category}</Link>
                </div>
              );
            })}
          </div>
          <div className="user-tools">
            <div className="header-fav-cart">
              <Link to={"/whishlist"} className="header-fav">
                <MdFavoriteBorder className="fav-icon" />
                <p>Wishlist</p>
              </Link>
              <Link to={"/cart"} className="header-cart">
                <IoCartOutline className="bag-icon" />
                <p>Store</p>
                <div className="header-cart-count">{cartCount}</div>
              </Link>
              <div className="header-login">
                <Link to={"/signup"}>
                  <GoPerson className="profile-icon" />
                  <p>Login</p>
                </Link>
              </div>
              <div onClick={openNav} className="header-menu">
                <FiMenu className="menu-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
