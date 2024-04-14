"use client";

import React from "react";

// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { promises as fs } from "fs";

export default function SwiperDemo() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      centeredSlides={true}
      navigation
      speed={5000}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img src="/broderie/img_11.jpg"></img>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img src="/enseignes/img_15.jpg"></img>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img src="/serigraphie/img_2.png"></img>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img src="/nos-realisations/img_4.png"></img>
      </SwiperSlide>
      ...
    </Swiper>
  );
}
