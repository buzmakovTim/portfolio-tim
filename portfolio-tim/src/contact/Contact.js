import React from 'react'
import style from './Contact.module.css'

export const Contact = () => {

    return (
        <div className={style.contact}>
            <div className={style.container}>

                <div className={style.title}>
                    <h2>Contact</h2>
                </div>
                <div className={style.contactForm}>
                    <input placeholder='Name'/>
                    <input placeholder='E-mail'/>
                    <textarea placeholder='You message'/>
                </div>
                <div className={style.sendMessage}>
                    <span>SEND MESSAGE</span>
                </div>
            </div>
        </div>
    )
}