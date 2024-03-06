import React from "react";
import './ProjectCard.css'
const ProjectCard = ({index,tools,data,title,demo,github,Img}) => {
  return (
    <>
      <div className="card" key={index}>
        <div className="img">
          <img src={Img} alt="" />
        </div>
        <div className="p-detail">
          <h2>{title}</h2>

          <p>
            <b>Tools used </b>: <span>{tools}</span>
          </p>
          <div className="item">
            {data.map((item) => (
              <>
                <li> {item}</li>
              </>
            ))}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                gap: "5px 10px",
              }}
            >
              <a className="link" href={`${demo}`} target="_blank">
                view project
              </a>
              <a className="link" href={`${github}`} target="_blank">
                source code
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
