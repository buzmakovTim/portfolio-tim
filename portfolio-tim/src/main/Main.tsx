import React from 'react'
import style from './Main.module.css'
import photo from '../img/300x450.jpg'

export const Main = () => {

    return (
        <div className={style.main}>
            <div className={style.container} id='about'>

                {/* Greeting */}
                <div className={style.titleContainer}>
                    <div className={style.text}>
                            {/* <span>Hi There</span> */}
                            <h1>Tim Buzmakov</h1>
                            <p className={`${style.softwareDeveloper} ${style.typingDemo}`}>Web Developer. </p>
                    </div>
                </div>

            </div>
        </div>
    )
}