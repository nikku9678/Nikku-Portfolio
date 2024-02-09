import React from 'react'
import './Contact.css'
import githubImg from '../../assets/github.png';
import instaImg from '../../assets/instagram.png';
import linkdImg from '../../assets/linkedin.png';

function Contact() {
  return (
    <div>
      <div className="contact">
        <div><h2>Get in touch</h2></div>
        <div className="form">
            <input type="text" placeholder="Name"/><br/>
           
            <input type="email" placeholder="Email Address"/><br />
           
            <textarea name="" id=""  cols="30" rows="10"  placeholder="Message"></textarea>
            <br />
            <button>Submit</button>
        </div>
        <div className="follow">
            <h3>Follow us</h3>
            <ul>
                <li><a href=""><img src={instaImg} alt="" /></a></li>
                <li><a href=""><img src={githubImg} alt="" /></a></li>
                <li><a href=""><img src={linkdImg} alt="" /></a></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Contact
