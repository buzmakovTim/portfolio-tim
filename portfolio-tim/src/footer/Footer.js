import React from 'react'
import style from './Footer.module.css'
import github from './../img/github.png'
import linkedIn from './../img/linkedIn.png'

export const Footer = () => {

    return (
        <div className={style.footer}>
            <div className={style.container}>
                
                <div className={style.links}>
                    <a href={'https://github.com/buzmakovTim'} target="blank">
                        <img src={github} />
                    </a>
                    <a href={'https://www.linkedin.com/in/timofey-buzmakov-b999b9133/'} target="blank">
                        <img src={linkedIn} />
                    </a>
                </div>
                
            </div>

        </div>
    )
}