import React, { useState } from 'react'
import style from './Contact.module.css'
import emailjs from 'emailjs-com'
import { Route, Redirect } from 'react-router-dom';
import {Confirmation} from './../confirmationPage/Confirmation'

export const Contact = () => {

    const SERVICE_ID = "service_xs6b29g";
    const TEMPLATE_ID = "template_6phxbqq"
    const USER_ID = "user_JRTAR0aXUphMjjZUedUDN";
    //const USER_ID = "FAKE";
    let validated = true;

    const [emailSent, setEmailSent] = useState('notYet'); // notYet, sent, failed,

    function sendEmail(e) {
        
    e.preventDefault();
    
    if(validated) {
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
          console.log(result.text);
          emailConfirmation('sent')
          e.target.reset();  
      }, (error) => {
          console.log(error.text);
          emailConfirmation('failed')
      });
      
    } else {
        alert('Form not validated')
    } 
}

    const emailConfirmation = (send) => {
        setEmailSent(send);
    }

    const confirmationComponent = (confirmation) => {

        return (
            <div>
            <Confirmation message={confirmation}/>
            </div>
        )

    }
    const contactForm = () => {

        return (
            <div className={style.contact} id='contact'>
            <div className={style.container}>

                <div className={style.title}>
                    <h2>Contact</h2>
                </div>
                <div className={style.contactForm}>

                    <form className={style.contactForm} onSubmit={sendEmail}>

                            {/* required  - validating form but need to refactor this */}
                            <input type="text" placeholder='Name*' name='name' required/>
                            <input type="text" placeholder='Subject*' name='subject' required/>
                            <input type="email" placeholder='E-mail*' name='email' required/>
                            <textarea name="message" placeholder='You message*' name='message' required/>
                            
                            <input type="submit" className={style.submitButton} value="Send Message" />

                    </form>

                </div>
            </div>
        </div>
        )
    }

    const showComponent = () => {
        if(emailSent === 'notYet'){
            return contactForm();
        }
        if(emailSent === 'sent') {
            return confirmationComponent('sent');
        }
        if(emailSent === 'failed') {
            return confirmationComponent('failed');
        }
    }

    return (
        <div>
            
            {showComponent()}
        </div>
    )
}