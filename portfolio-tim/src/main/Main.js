import React from 'react'
import style from './Main.module.css'
import photo from '../img/300x400.jpg'

export const Main = () => {

    return (
        <div className={style.main}>
            <div className={style.container}>

                <div className={style.text}>
                        <span>Hi There</span>
                        <h1>I am Tim Buzmakov</h1>
                        <p className={`${style.softwareDeveloper} ${style.typingDemo}`}>Full-Stack software developer. </p>
                </div>
                <div className={style.photo}>
                <img src={photo}></img>
            
                </div>
            </div>
        </div>
    )
}