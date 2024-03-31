import React, { useState } from "react";

import NavBurgerMenu from "../burger/NavBurgerMenu";
import NavLogo from "../logo/NavLogo";
import NavMenuItem from "../menuItem/NavMenuItem";
import NavDropdownMenu from "../dropdown/NavDropdownMenu";


function Navbar({ imgSrc, imgAlt, menuItems, bgColor, textColor, burgerColor, btnBgColor, btnTextColor, listStyle, enableBurgerMenu, enableDropdownMenu, enableNavList, enableRegister, onLoginClick, onRegisterClick }) {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav id="navbar" className={`navbar--component ${bgColor}`}>
            <div className="navbar-container navbar--component">
                <NavLogo imgSrc={imgSrc} imgAlt={imgAlt} />
                {enableBurgerMenu !== false && (
                    <NavBurgerMenu burgerColor={burgerColor} showMenu={showMenu} setShowMenu={setShowMenu} />
                )}
                {enableNavList !== false && (
                    <ul className={`navbar-menu navbar--component ${listStyle}`}>
                        {menuItems.map((menuItem, index) => (
                            <NavMenuItem key={index} menuItem={menuItem} textColor={textColor} />
                        ))}
                    </ul>
                )}
                {enableRegister !== false && (
                    <div className="navbar-register-container">
                        <button className={`navbar-button navbar-login-button ${btnBgColor} ${btnTextColor}`} onClick={onLoginClick}>Login</button>
                        <button className={`navbar-button navbar-register-button ${btnBgColor} ${btnTextColor}`} onClick={onRegisterClick}>Register</button>
                    </div>
                )}
                {enableDropdownMenu && (
                    <NavDropdownMenu
                        enableRegister={enableRegister}
                        onLoginClick={onLoginClick}
                        onRegisterClick={onRegisterClick}
                        showMenu={showMenu}
                        menuItems={menuItems}
                        textColor={textColor}
                        bgColor={bgColor}
                        btnBgColor={btnBgColor}
                        btnTextColor={btnTextColor}
                    />
                )}
            </div>
        </nav >
    );
}

Navbar.defaultProps = {
    imgSrc: "./",
    imgAlt: "Logo",
    menuItems: [
        { label: "Home", href: "#" },
        { label: "About", href: "#" },
        { label: "Services", href: "#" },
        { label: "Contact", href: "#" },
    ],
    bgColor: "bg-white",
    textColor: "text-black",
    listStyle: "disc",
    btnBgColor: "bg-white",
    btnTextColor: "text-black",
    enableDropdownMenu: true,
    enableNavList: true,
    enableBurgerMenu: true,
    burgerColor: "bg-pink",
    onLoginClick: () => { },
    onRegisterClick: () => { },
};

export default Navbar;
