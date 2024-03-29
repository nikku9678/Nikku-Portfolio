import React from "react";
import "./Contact.css";
import githubImg from "../../assets/github.png";
import instaImg from "../../assets/instagram.png";
import linkdImg from "../../assets/linkedin.png";

function Contact() {
  return (
    <div>
      <div className="contact">
        <div>
          <h1>Get in touch</h1>
        </div>
        <div className="form">
          <input type="text" placeholder="Name" />
          <br />

          <input type="email" placeholder="Email Address" />
          <br />

          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <br />
          <button className="btn-grad">Submit</button>
        </div>
        <div className="follow">
          <h3>Follow us</h3>
          <ul>
            <li>
              <a href="https://www.instagram.com/_nikku_9678/" target="_blank">
                <img src={instaImg} alt="" />
              </a>
            </li>
            <li>
              <a href="https://github.com/nikku9678" target="_blank">
                <img src={githubImg} alt="" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/nikku-kumar-das-b6955121b/"
                target="_blank"
              >
                <img src={linkdImg} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
