import React, { useEffect, useState } from "react";
import "./About.css";
import Img from "../../assets/nikku_image.jpg";
import { RingLoader } from "react-spinners";

function About() {
  // const [loading,setLoading] =useState(false)

  // useEffect(()=>{
  //   setLoading(true)
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 1000);
  // },[])
  return (
    <div>
      <>
        <div className="about">
          <div>
            <h1>About us</h1>
          </div>
          <div className="about-box">
            <div className="about-content">
              
              <div className="about-info">
                I am a crazy Technology Enthusiast, passionate about AI and Machine Learning, and possess the zeal to explore Full stack
                development. I am currently pursuing my Bachelor of Technology
                in Computer Science and Engineering from Netaji Subhash
                Engineering College Kolkata. I am also working on many projects
                in web development(using Javascript/ReactJS/NodeJS and some
                other libraries and frameworks) and Machine Learning using
                Python (A good grasp of Analysis) and looking forward to learn
                and work on many more cool technologies. I love to portray the
                world in a frame with my tech skills and sometimes escape to the
                world of books. Can’t restrain me from capturing the eyeful even
                though lacks photography skills
              </div>
            </div>

            <div className="about-right">
              <img src={Img} alt="" />
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default About;
