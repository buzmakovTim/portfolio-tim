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
                    Contact form
                </div>
            </div>
        </div>
    )
}