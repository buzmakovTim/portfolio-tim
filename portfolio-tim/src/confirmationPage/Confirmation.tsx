import React from 'react';
import style from './Confirmation.module.css';

export const Confirmation = (props: any) => {

    
    const message = () => {
        if(props.message === 'sent'){
            return (
                <div>
                    <p>Thanks for contacting me!</p> 
                    <p>I will be in touch with you shortly.</p>
                </div>
            )
        } else {
            return (
                <div>
                    <p>Oops...</p>
                    <p>Something went wrong, please try again</p>
                </div>
            )
        }
    }


    return (
        <div className={style.contact} id='contact'>
            <div className={style.container}>

                <div className={style.title}>
                    <h2>Contact</h2>
                </div>
                <div className={style.confirmationMessage}>

                    {message()}

                </div>
            </div>
        </div>
    )
}