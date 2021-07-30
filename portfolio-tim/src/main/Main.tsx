import React from 'react'
import style from './Main.module.scss'
import photo from '../img/300x450.jpg'
import {Link} from 'react-scroll'

export const Main = () => {

    return (
        <div className={style.main}>
            <div className={style.container} id='about'>

                {/* Greeting */}
                <div className={style.titleContainer}>
                    <div className={style.text}>
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
                                
                    </div>
                </div>

            </div>
        </div>
    )
}