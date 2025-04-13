import React from "react";
import "./MenuSection.css";

const menuItems = [
  { href: "#shop", label: "SHOP" },
  { href: "#skills", label: "SKILLS" },
  { href: "#stories", label: "STORIES" },
  { href: "#about", label: "ABOUT" },
  { href: "#contact", label: "CONTACT US" },
];

function MenuItem({ href, label }) {
  return (
    <li>
      <a href={href}>{label}</a>
    </li>
  );
}

function Menu() {
  return (
    <nav className="menu">
      <ul>
        {menuItems.map((item, index) => (
          <MenuItem key={index} href={item.href} label={item.label} />
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
