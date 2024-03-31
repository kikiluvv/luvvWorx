import React, { useEffect, useState, useRef } from "react";
import NavMenuItem from "../menuItem/NavMenuItem";

function NavDropdownMenu({ showMenu, menuItems, textColor, bgColor, btnBgColor, btnTextColor, enableRegister, onLoginClick, onRegisterClick }) {
    const [menuHeight, setMenuHeight] = useState(0);
    const menuRef = useRef(null);

    useEffect(() => {
        if (showMenu) {
            setMenuHeight(menuRef.current.scrollHeight);
        } else {
            setMenuHeight(0);
        }
    }, [showMenu, menuItems]);

    return (
        <ul
            className={`navbar-dropdown-menu navbar--component ${showMenu ? "burger-show" : ""} ${bgColor}`}
            style={{ height: `${menuHeight}px` }}
            ref={menuRef}
        >
            {enableRegister !== false && (
                <div className="navbar-dropdown-register-container">
                    <button className={`navbar-dropdown-button navbar-login-button ${btnBgColor} ${btnTextColor}`} onClick={onLoginClick}>Login</button>
                    <button className={`navbar-dropdown-button navbar-register-button ${btnBgColor} ${btnTextColor}`} onClick={onRegisterClick}>Register</button>
                </div>
            )}
            {menuItems.map((menuItem, index) => (
                <NavMenuItem key={index} menuItem={menuItem} textColor={textColor} />
            ))}
        </ul>
    );
}

export default NavDropdownMenu;
