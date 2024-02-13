import React from "react";
import "./Home.css";
import githubImg from "../../assets/github.png";
import instaImg from "../../assets/instagram.png";
import linkdImg from "../../assets/linkedin.png";

import Img from "../../assets/nikku_image.jpg";
import { Typewriter } from "react-simple-typewriter";

function Home() {
  return (
    <div>
      <section className="home" id="home">
        <div className="home-img" id="shrink">
          <img src={Img} alt="" />
        </div>
        <div className="home-text">
          <span>Hi, Myself</span>
          <h1>Nikku Kumar Das</h1>
          <div>
            <span> </span>
            <span
              style={{
                fontSize: "1.3rem",
                fontWeight: "normal",
                color: "green",
              }}
            >
              <Typewriter
                words={["Frontend Developer"]}
                loop={2}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={800}
              />
            </span>
          </div>
          <h2>
            <a
              href=""
              className="typewrite"
              data-period="500"
              data-type='[ "Software Developer.", "Frontend Developer.", "I Love Coding &hearts;", "I Love to Develop." ]'
            >
              <span className="wrap"></span>
            </a>
          </h2>
          {/* <p>
            <h2 style={{ fontWeight: "bold;", fontSize:'1.2rem'}}>Welcome to my Portfolio.</h2>
            I am a Frontend developer, Programming enthusiast. <br />
      
          </p> */}

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
          <a
            href="https://drive.google.com/file/d/1dpMWliByMLFDaC9bBiIBVxYCdJua70gP/view?usp=drive_link"
            target="_blank"
            className="btn"
          >
            Hire me
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
