import React, { useEffect, useState } from "react";
import { data } from "./ProjectApi";
import Img from "../../assets/body_image.jpg";
import "./Projects.css";
import ProjectCard from "./ProjectCard";

function Projects() {

  return (
    <div className="project">
      <h1>Projects</h1>
      <div className="p-card">
        {data.map((data, index) => (
          <div key={index}>
            <ProjectCard
          Img={data.Img}
            tools={data.tools}
            
            title={data.title}
            demo={data.demo}
            github={data.github}
            data={data.description}

          />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
