import React from 'react'
import './Home.css'
import Img from "../../assets/nikku_image.jpg";
import { Button } from 'antd';
function Homemenu() {
  return (
    <div>
      <section className="sec-2">
        <div className="home-2">
          
          <div className="project">
            <img src={Img} alt="" />
            <h3>Acheivements</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil cum consequuntur facilis porro? Fugiat, error!
            </p>
            <Button type="primary" size={"middle"}>
            More++
          </Button>
          </div>
          <div className="project">
            <img src={Img} alt="" />
            <h3>Projects</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil cum consequuntur facilis porro? Fugiat, error!
            </p>
            <Button type="primary" size={"middle"}>
            More++
          </Button>
          </div>
          <div className="project">
            <img src={Img} alt="" />
            <h3>Education</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil cum consequuntur facilis porro? Fugiat, error!
            </p>
            <Button type="primary" size={"middle"}>
            More++
          </Button>
          </div>
          
          
        </div>
      </section>
    </div>
  )
}

export default Homemenu
