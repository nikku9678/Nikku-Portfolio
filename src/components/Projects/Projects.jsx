import React, { useEffect, useState } from "react";
import { data } from "./ProjectApi";
import Img from "../../assets/body_image.jpg";
import "./Projects.css";

function Projects() {
  const [show, setShow] = useState(false);

  const handleModel = () => {
    console.log("hello");
    setShow(!show);
  };
  return (
    <div className="project">
      <h1>Projects</h1>
      <div className="p-card">
        {data.map((data, index) => (
          <>
            <div className="card" key={index}>
              <div className="img">
                <img src={data.Img} alt="" />
              </div>
              <div className="p-detail">
                <h2>{data.title}</h2>

                {/* <p><b>Tools used </b>:- <span>{data.tools}</span></p>
          <div className='item'>{data.description.map((item)=>(
            <>
            <li>{item}</li>
            
            </>
          ))}</div> */}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "5px 10px",
                }}
              >
                <a className="link" href={`${data.demo}`} target="_blank">
                  view project
                </a>
                <a className="link" href={`${data.github}`} target="_blank">
                  source code
                </a>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Projects;
