import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Skills.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import skill from "./SkillsApi";
function Skills() {
  return (
    <div className="skills">
      <h1 className="heading">Skills</h1>

     <div className="skill-list">
     {skill.map((item, index) => (
        <div className="skill-card" key={index}>
        
         <img src={item.image} alt="" />
        </div>
      ))}

     </div>
      {/* <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={slide_image_1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide_image_2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide_image_3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide_image_4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide_image_5} alt="" /></SwiperSlide>
       
      </Swiper> */}
    </div>
  );
}

export default Skills;
