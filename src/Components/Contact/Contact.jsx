import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { AlternateEmail, Telegram, Phone, LocationOn } from '@mui/icons-material';
import './Contact.scss';

const Contact = () => {
  const form = useRef();
  const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false);
  const [errorFields, setErrorFields] = useState([]);

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const message = form.current.message.value;

    const errors = [];

    if (!name) {
      errors.push('user_name');
    }
    if (!email) {
      errors.push('user_email');
    }
    if (!message) {
      errors.push('message');
    }

    setErrorFields(errors);

    if (errors.length > 0) {
      return;
    }

    setErrorFields([]);

    if (!isValidEmail(email)) {
      setErrorFields([...errors, 'user_email']);
      return;
    }

    emailjs
      .sendForm('service_60clgee', 'template_9whr8y4', form.current, '6VAFYhxPlZ78mQkND')
      .then(
        (result) => {
          console.log(result.text);
          setIsSuccessMessageVisible(true);
          setTimeout(() => {
            setIsSuccessMessageVisible(false);
          }, 10000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="contact">
      <div className="wrapper">
        <p>Get in touch</p>
        <h1>Contacts</h1>
        <div className="container">
          <form ref={form} onSubmit={sendEmail} className="form">
            <h4>Send me a Quick Email</h4>
            <div className="formField">
              <label>Name</label>
              <input type="text" name="user_name" />
              {errorFields.includes('user_name') && <div className="error-message">Please enter your name</div>}
            </div>
            <div className="formField">
              <label>Email</label>
              <input type="email" name="user_email" />
              {errorFields.includes('user_email') && <div className="error-message">Please enter your email</div>}
            </div>
            <div className="formField">
              <label>Message</label>
              <textarea name="message" />
              {errorFields.includes('message') && <div className="error-message">Please enter a message</div>}
            </div>
            <button type="submit">Send</button>
          </form>
          <div className="extraContact">
            <div className="extras">
              <AlternateEmail className='icons' />
              <a href="mailto:your.email@gmail.com?subject=Hello%20There&body=Just%20saying%20hi!">shimantodevjs@gmail.com</a>
            </div>
            <div className="extras">
              <Telegram className='icons'  />
              @ShimantoWebDevJS
            </div>
            <div className="extras">
              <Phone className='icons' />
              +79991410912
            </div>
            <div className="extras">
              <LocationOn className='icons' />
              Nizhny Novgord, Russia
            </div>
          </div>
        </div>
        <div className="footer">Thank you for your time 😄</div>
      </div>
      {isSuccessMessageVisible && (
        <div className="success-popup">
          Message successfully sent!
        </div>
      )}
    </div>
  );
};

export default Contact;



