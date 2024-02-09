import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Skills.css'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

import slide_image_1 from '../../assets/image1.jpg';
import slide_image_2 from '../../assets/image2.jpg';
import slide_image_3 from '../../assets/image3.jpg';
import slide_image_4 from '../../assets/image4.jpg';
import slide_image_5 from '../../assets/image5.jpg';

function Skills() {
  return (
    <div className="skills">
      <h1 className="heading">Photo Gallery</h1>
      <Swiper
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
       
      </Swiper>
    
    </div>
  );
}

export default Skills;