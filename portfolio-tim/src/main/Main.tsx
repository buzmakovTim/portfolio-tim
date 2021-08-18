import React from 'react'
import style from './Main.module.scss'
import photo from '../img/profileImage.png'
import {Link} from 'react-scroll'
import Particles from 'react-particles-js'
//import Fade from 'react-reveal/Fade'
import { Fade } from "react-awesome-reveal";
import Tilt from 'react-parallax-tilt';

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
        
                {/* Greeting start */}
                <div className={style.titleContainer}>
                    
               
                    <div className={style.text}>
                    <Tilt
                        tiltMaxAngleX={5}
                        tiltMaxAngleY={5}
                    >
                    
                        <Fade cascade>
                                {/* <span>Hi There</span> */}
                                <h1>Tim Buzmakov</h1>
                                <span className={style.typingDemo}>Software Developer. </span>
                                <span className={style.basedInCanada}>based in Canada.</span>

                                {/* Button */}
                                
                                    
                                <Link
                                    to='myProjects'
                                    spy={true}
                                    smooth={true}
                                    offset={-55}
                                    duration={500}
                                    >
                                    <div className={style.button}>PROJECTS</div>
                                </Link>
                        </Fade>    
                    
                        </Tilt>
                    </div>
                    
                </div>
                {/* Greeting end */}

                {/* Portfolio Image */}
                <div className={style.profileImage}>
                    <img src={photo} alt="" />
                </div>
               

            </div>
        
        </div>
    )
}