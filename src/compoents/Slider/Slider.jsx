/** @format */

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, Autoplay, A11y } from "swiper";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "./index.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={20}
      slidesPerView={4}
      navigation
      loop={true}
      className="home-slider"
    >
      <SwiperSlide>
        <img src="https://source.unsplash.com/random/300x300?sig=1" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://source.unsplash.com/random/300x300?sig=2" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://source.unsplash.com/random/300x300?sig=3" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://source.unsplash.com/random/300x300?sig=4" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://source.unsplash.com/random/300x300?sig=5" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://source.unsplash.com/random/300x300?sig=6" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://source.unsplash.com/random/300x300?sig=7" alt="" />
      </SwiperSlide>
    </Swiper>
  );
};
