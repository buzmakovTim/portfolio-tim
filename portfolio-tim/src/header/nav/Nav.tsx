import React from 'react'
import style from './Nav.module.css'
import {Link} from 'react-scroll'
import Scrollspy from 'react-scrollspy'


export const Nav = () => {

    return (
        
        <div className={style.navContainer}>
            <div >

            {/* Scrollspy - Scrolling through the page and select right tab in the Nav menu */}
            <Scrollspy
              className={style.nav}
              items={["about", "myProgects", "skills", "contact"]} // items should match with ID for each component
              currentClassName={style.current}
              offset={-90}
            >    
            
                <Link
                    to='about'
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    >About</Link>
                <Link
                    //activeClass='active'
                    to='myProgects'
                    spy={true}
                    smooth={true}
                    offset={-55}
                    duration={500}
                    >My Projects</Link>
                <Link
                    //activeClass='active'
                    to='skills'
                    spy={true}
                    smooth={true}
                    offset={-55}
                    duration={500}
                    >Skills</Link>
                <Link
                    //activeClass='active'
                    to='contact'
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    >Contact</Link>

            </Scrollspy>
            </div>
            
            
              {/* <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#news">News</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a
                  className="white-fill-bg btn-outline btn_sm"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://themeforest.net/item/shane-react-personal-portfolio-template/32642263"
                >
                  Buy Now
                </a>
              </li> */}
            
        </div>
        
    )
}
