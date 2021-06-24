import React from 'react'
import style from './Main.module.css'
import photo from '../img/300x450.jpg'

export const Main = () => {

    return (
        <div className={style.main}>
            <div className={style.container}>

                {/* Greeting */}
                <div className={style.text}>
                        <span>Hi There</span>
                        <h1>I am Tim Buzmakov</h1>
                        <p className={`${style.softwareDeveloper} ${style.typingDemo}`}>Full-Stack software developer. </p>
                </div>
                
                {/* Photo */}
                <div className={style.photoDiv}>
                    <img src={photo}></img>
                </div>
            </div>
        </div>
    )
}