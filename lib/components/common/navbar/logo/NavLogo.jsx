// Logo.js
import React from "react";

function NavLogo({ imgSrc, imgAlt }) {
  return (
    <a href="#" className="navbar-logo navbar--component">
      <img src={imgSrc} alt={imgAlt} />
    </a>
  );
}

export default NavLogo;
