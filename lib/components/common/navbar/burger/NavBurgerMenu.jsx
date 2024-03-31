// BurgerMenu.js
import React from "react";

function NavBurgerMenu({ showMenu, setShowMenu, burgerColor }) {
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={`burger-menu ${showMenu ? "burger-animate" : ""}`} onClick={toggleMenu}>
      <div className={`burger-bar ${burgerColor}`}></div>
      <div className={`burger-bar ${burgerColor}`}></div>
      <div className={`burger-bar ${burgerColor}`}></div>
    </div>
  );
}

export default NavBurgerMenu;
