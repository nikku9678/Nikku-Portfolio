import React, { useEffect } from 'react'
import {data} from '../../Data/ProjectData'
import Img from '../../assets/body_image.jpg'
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
          <p><b>Tools used </b>:- <span>{data.tools}</span></p>
          <div className='item'>{data.description.map((item)=>(
            <>
            <li>{item}</li>
            
            </>
          ))}</div>
        </div>
     <a id='link' href={`${data.demo}`} target='_blank'>view project</a>

      </div>
      </>)}


    </div>
    </div>
  )
}

export default Projects;
