import React from 'react'
import style from './Main.module.scss'
import photo from '../img/300x450.jpg'
import {Link} from 'react-scroll'
import Particles from 'react-particles-js'
//import Fade from 'react-reveal/Fade'
import { Fade } from "react-awesome-reveal";


const particlesOptions = {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
}

export const Main = () => {

    return (
        
        <div className={style.main}>
        
        <Particles className={style.particles} params={particlesOptions}/>
        
            <div className={style.container} id='about'>
        
                {/* Greeting */}
                <div className={style.titleContainer}>
                    <div className={style.text}>
                    
                    
                    <Fade cascade>
                            {/* <span>Hi There</span> */}
                            <h1>Tim Buzmakov</h1>
                            <span className={style.typingDemo}>Software Developer. </span>
                            <span className={style.basedInCanada}>based in Canada.</span>

                            {/* Button */}
                            
                                
                            <Link
                                to='myProgects'
                                spy={true}
                                smooth={true}
                                offset={-55}
                                duration={500}
                                >
                                <div className={style.button}>SEE PROJECTS</div>
                            </Link>
                                
                            </Fade>                    
                    </div>
                </div>

            </div>
        
        </div>
    )
}