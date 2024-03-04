import React from "react";
import "./Header.css";
import logo from "../assets/logo-removebg-preview.png"
const Header = () => {
  return (
    <>
      <header className=" parant-div">
      <div className="head">
        <li>Find a store</li> |<li>Buying guides</li>|<li>Contact Us</li>
      </div>
      <div className="logo">
        <img
          src={logo}alt=""/>
        
        <div className="inputbox">
          <input type="text" placeholder="Find your favorite products" />
          <div className="Search-icon">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div>
          <div className="head-logo">
            <li>Select Your Pin Code</li>|
            <span><i class="fa-solid fa-cart-shopping"></i></span>
            <li>Cart</li>|
            <span><i class="fa-solid fa-user"></i></span>
            <li>Login</li>
          </div>
        </div>
      </div>
      </header>
    </>
  );
};

export default Header;
