import React, { useEffect, useRef, useState } from "react";
import "./header.scss";
import logo from "../../assets/logo/Logo_NIKE.svg";
import { IoCartOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import categoryApi from "../../categoryApi/categoryApi";
import Login from "../../assets/icon/profile-about-mobile-ui-svgrepo-com.svg";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";

const category = categoryApi;
function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null); // Reference to the menu element

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicks outside the menu
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // Ensure the effect runs only once
  return (
    <header>
      <div className="container">
        <div className="header-main">
          <div className="header-logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="header-menu-item">
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
                <IoSearchOutline className="search-icon"/>
                <p>Search</p>
                </div>
                <div className="header-fav">
                  <IoIosHeartEmpty className="fav-icon" />
                  <p>Wishlist</p>
                </div>
                <div className="header-cart">
                  <IoCartOutline className="bag-icon" />
                  <p>Store</p>
                </div>
                <div className="header-login">
                  <Link to={"/login"}>
                    <img src={Login} />
                    <p>Profile</p>
                  </Link>
                </div>
                <div className="header-menu">
                  <FiMenu className="menu-icon" onClick={handleShowMenu} />
                  <div className={`menu ${showMenu ? "open" : ""}`}>
                    <p>menu</p>
                    <p>menu</p>
                    <p>menu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
