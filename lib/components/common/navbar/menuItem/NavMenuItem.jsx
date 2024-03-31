// MenuItem.js
import React from "react";

function NavMenuItem({ menuItem, textColor }) {
  return (
    <li className="navbar-item navbar--component">
      <a href={menuItem.href} className={`navbar-link navbar--component ${textColor}`}>
        {menuItem.label}
      </a>
    </li>
  );
}

export default NavMenuItem;
