import React,{useRef,useState} from "react";
import "./Contact.css";
import emailjs from '@emailjs/browser'
import faq from "../../assets/FAQ.png";
import Btn from '../SendButton/Send';

function Contact() {

  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e)  => {
    e.preventDefault();

    emailjs.sendForm('service_oi5ik19', 'template_n809hrv', form.current, '4GkOPU_O0iNGYBte4')
    .then((result) => {
      console.log(result.text);
      setDone(true);
    //   form.reset();
    // }, (error) => {
    //   console.log(error.text);
    })
  };


  return (
    <div className="contact-form">
      <h2 id="head">Get in Touch</h2>
      <span id="span1">
        Having a Query about GDSC ? Feel free to contact us.
      </span>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />

          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />

          <textarea name="message" className="user" placeholder="Message" />
          <Btn/>
          <span>{done && "Thanks For Contacting Me"}</span>
        </form>
        <img id="faq" src={faq} alt='faq'/>
      </div>
    </div>
  );
}

export default Contact;
