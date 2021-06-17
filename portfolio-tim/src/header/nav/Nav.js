import React from 'react'
import style from './Nav.module.css'
import {Link} from 'react-scroll'

export const Nav = () => {

    return (
        <div className={style.nav}>
            
            <Link
                activeClass='active'
                to='about'
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                >About</Link>
            <Link
                activeClass='active'
                to='myProgects'
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                >My Projects</Link>
            <Link
                activeClass='active'
                to='skills'
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                >Skills</Link>
            <Link
                activeClass='active'
                to='contact'
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                >Contact</Link>

        </div>
    )
}
