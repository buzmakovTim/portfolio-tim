import React from 'react'
import style from './Contact.module.css'
import emailjs from 'emailjs-com'

export const Contact = () => {

    const SERVICE_ID = "service_xs6b29g";
    const TEMPLATE_ID = "template_6phxbqq"
    const USER_ID = "user_JRTAR0aXUphMjjZUedUDN";



    function sendEmail(e) {
        
        e.preventDefault();

        
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
          console.log(result.text);
          alert('Your email has been sent!')
      }, (error) => {
          console.log(error.text);
          alert('Error!')
      });
      e.target.reset();
    }

    return (
        <div className={style.contact} id='contact'>
            <div className={style.container}>

                <div className={style.title}>
                    <h2>Contact</h2>
                </div>
                <div className={style.contactForm}>

                    <form className={style.contactForm} onSubmit={sendEmail}>

                            <input type="text" placeholder='Name*' name='name' />
                            <input type="text" placeholder='Subject*' name='subject' />
                            <input type="email" placeholder='E-mail*' name='email' />
                            <textarea name="message" placeholder='You message*' name='message'/>
                            <input type="submit" className={style.submitButton} value="Send Message" />

                    </form>

                </div>
            </div>
        </div>
    )
}