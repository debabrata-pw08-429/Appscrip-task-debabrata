import React from "react";
import "./Navbar.css";
import logo from "../assets/Logo.png";
import { FaSearch, FaHeart, FaShoppingBag, FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="logo" className="logo-icon" />
      </div>

      <span className="logo-text">LOGO</span>

      <div className="navbar-right">
        <FaSearch className="icon" />
        <FaHeart className="icon" />
        <FaShoppingBag className="icon" />
        <FaUser className="icon" />
        <div className="language-dropdown">
          ENG <span className="dropdown-arrow">▼</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
