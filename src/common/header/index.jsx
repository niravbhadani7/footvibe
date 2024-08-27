import React, { useEffect, useRef, useState } from "react";
import "./header.scss";
import logo from "../../assets/logo/Logo_NIKE.svg";
import { IoCartOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import categoryApi from "../../categoryApi/categoryApi";
import { CgProfile } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";

const category = categoryApi;
function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openNav = () => {
    setIsNavOpen(true);
    document.body.style.overflowY = "hidden";
    // .slideroffer
    document.querySelector('.slideroffer').style.zIndex = "-1";

  };

  const closeNav = () => {
    setIsNavOpen(false);
    document.body.style.overflowY = "auto";
    document.querySelector('.slideroffer').style.zIndex = "0";
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header>
      <div className={`sidenav ${isNavOpen ? "open" : ""}`}>
        <div className="closebtn" onClick={closeNav}>
          &times;
        </div>
        <Link className="menu-item" to={"/"}>
          Home
        </Link>
        <div className="menu-item category" onClick={toggleDropdown}>
          Category
          <FaCaretDown />
        </div>
        <div className={`dropdown-category ${dropdownOpen ? "open" : ""}`}>
          {categoryApi.map((item, index) => {
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
        <Link className="menu-item" to={"/profile"} onClick={closeNav}>
          Profile{" "}
        </Link>
      </div>
      <div className="container">
        <div className="header-main">
          <div className="header-logo">
            <Link to="/">
              <img src={logo} alt="logo" />
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
              <div className="header-search">
                <IoSearchOutline className="search-icon" />
                <p>Search</p>
              </div>
              <div className="header-fav">
                <MdFavoriteBorder className="fav-icon" />
                <p>Wishlist</p>
              </div>
              <div className="header-cart">
                <IoCartOutline className="bag-icon" />
                <p>Store</p>
              </div>
              <div className="header-login">
                <Link to={"/login"}>
                  <CgProfile className="profile-icon" />
                  <p>Profile</p>
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
