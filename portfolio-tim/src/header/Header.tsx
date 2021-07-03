import React, { useState } from 'react'
import style from './Header.module.css'
import { Nav } from './nav/Nav'

export const Header = () => {


    const [navbar, setNavbar] = useState(false);

        const changeBackground = () => {
            if (window.scrollY >= 80) {
            setNavbar(true);
            } else {
            setNavbar(false);
            }
        };

    window.addEventListener("scroll", changeBackground);


    return (
        <div className={navbar ? style.headerOpened : style.header}>
            <Nav />
        </div>
    )
}
