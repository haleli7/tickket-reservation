/** @format */

// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  A11y,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import './index.css';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay ]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      loop={true}
      pagination={{ clickable: true }}
      className='home-slider'
    >
      <SwiperSlide>
        <img src="https://loremflickr.com/640/360" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://loremflickr.com/640/360" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://loremflickr.com/640/360" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://loremflickr.com/640/360" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://loremflickr.com/640/360" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://loremflickr.com/640/360" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://loremflickr.com/640/360" alt="" />
      </SwiperSlide>
    </Swiper>
  );
};
