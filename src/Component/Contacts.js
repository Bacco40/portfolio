import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";

function Contact() {

  const form = useRef();

  function validateEmail (emailAdress)
  {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailAdress.match(regexEmail)) {
      return true; 
    } else {
      return false; 
    }
  }

  const sendEmail = (e) => {
    e.preventDefault();
    const name = document.querySelector('#nameForm');
    const mail = document.querySelector('#user_email');
    const message = document.querySelector('#message');
    const messageResult = document.querySelector('.messageResult');
    if(name.value !== '' && message.value !== '' && validateEmail(mail.value) === true ) {
      emailjs.sendForm('contact_service', 'contact_form', form.current, '4T1zlzF81zJDqWmYQ')
      .then((result) => {
          name.value = '';
          mail.value = '';
          message.value = '';
          messageResult.innerHTML='Message sent successfully!';
      }, (error) => {
        messageResult.innerHTML='Error in the sending process, try again!';
      });
    }
    else{
      if(name.value === ''){
        name.placeholder='Please insert a name.';
      }
      if(message.value === ''){
        message.placeholder='Please insert a message.';
      }
      if(validateEmail(mail.value) !== true){
        mail.value='';
        mail.placeholder='Please insert a valid mail.' ;
      }
      messageResult.innerHTML='Please insert all the data as requested!';
    }
  };

  return (
    <section className='sectionTransition'>
        <h2 className="sectionTitle" id='contact'>03. Contact</h2>
        <div className="contactContainer">
          <p className='description' id='contactIntro'>I'm currently looking for a role as a full-stack web developer.<br/>Whether you have a question, an offer or just want to chat, send me an email or a message and I will get back to you!</p>
          <div className='formContainer'>
            <form id="contact-form" ref={form} onSubmit={sendEmail}>
              <input type="text" name="user_name" id='nameForm' placeholder='YOUR NAME *' />
              <input type="text" name="user_email" id='user_email' placeholder='YOUR EMAIL ADDRESS *'/>
              <textarea name="message" id='message' placeholder='YOUR MESSAGE *'></textarea>
              <div className='formBottom'>
                <div className='messageResult'></div> 
                <input type="submit" value="Send Message" className='sendMail'/>
              </div>
            </form>
          </div>
        </div>
    </section>
  );
}

export default Contact;