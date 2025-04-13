import React from "react";
import "./ProductCard.css";
import { FaHeart } from "react-icons/fa";

const ProductCard = ({ image, title, price }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-details">
        <h3 className="product-title">{title}</h3>
        <p className="product-price">${price}</p>
        <p className="product-subtext">
          <a href="#" className="link">
            Sign in
          </a>
          , or Create an account to see pricing
        </p>
      </div>
      <div className="wishlist-icon">
        <FaHeart />
      </div>
    </div>
  );
};

export default ProductCard;
