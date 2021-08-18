import React, { useState } from 'react'
import style from './Nav.module.scss'
import {Link} from 'react-scroll'
import Scrollspy from 'react-scrollspy'
import menuButton from './../../img/menuButton1.png';

export const Nav = () => {

    const[showMenu, setShowNemu] = useState(false);
 
    return (
        
        <div className={style.navContainer}>
            

            {/* Scrollspy - Scrolling through the page and select right tab in the Nav menu */}
            <Scrollspy
              className={!showMenu ? style.nav : style.navShow}
              items={["about", "myProjects", "skills", "contact"]} // items should match with ID for each component
              currentClassName={style.current}
              offset={-90}
            >    
            
                <Link
                    to='about'
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onClick={() => setShowNemu(false)}
                    >About</Link>
                <Link
                    //activeClass='active'
                    to='myProjects'
                    spy={true}
                    smooth={true}
                    offset={-55}
                    duration={500}
                    onClick={() => setShowNemu(false)}
                    >My Projects</Link>
                <Link
                    //activeClass='active'
                    to='skills'
                    spy={true}
                    smooth={true}
                    offset={-55}
                    duration={500}
                    onClick={() => setShowNemu(false)}
                    >Skills</Link>
                <Link
                    //activeClass='active'
                    to='contact'
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onClick={() => setShowNemu(false)}
                    >Contact</Link>

            </Scrollspy>
            
            
            
            <div className={style.showMenuButton} onClick={ () => setShowNemu(!showMenu) }>
              <img src={menuButton} alt="" />
            </div> 
            

            
        </div>
        
    )
}
