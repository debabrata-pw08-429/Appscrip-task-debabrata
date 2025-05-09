import React, { useState } from "react";
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
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </button>
      <nav className={`menu ${open ? "open" : ""}`}>
        <ul>
          {menuItems.map((item, index) => (
            <MenuItem key={index} href={item.href} label={item.label} />
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Menu;
