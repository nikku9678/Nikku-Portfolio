import React, { useEffect } from 'react'
import {data} from '../../Data/ProjectData'
import Img from '../../assets/nikku_image.jpg'
import './Projects.css'


function Projects() {
  useEffect(()=>{
    

  },[])
  return (
    <div className='project'>
      <h2>Projects</h2>
      <div className="p-card">
      {data.map((data)=><>
      <div className="card">
        <div className="img">
          <img src={Img} alt="" />
        </div>
        <div className='p-detail'>
          <h2>{data.title}</h2>
          <h4>{data.tools}</h4>
          <div className='item'>{data.description.map((item)=>(
            <>
            <li>{item}</li>
            </>
          ))}</div>
          <a href="/">view project</a>
        </div>

      </div>
      </>)}


    </div>
    </div>
  )
}

export default Projects;
