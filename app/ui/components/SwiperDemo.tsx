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
import { maxHeaderSize } from "http";

export default function SwiperDemo() {
  return (
    <Swiper
      className=""
      // install Swiper modules
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      // autoplay={{
      //   delay: 2500,
      //   disableOnInteraction: false,
      // }}
      // allowTouchMove={true}
      // effect="'cards'"
      // keyboard={{ enabled: true, pageUpDown: true, onlyInViewport: true }}
      autoHeight={true}
      parallax={true}
      centerInsufficientSlides={true}
      centeredSlidesBounds={true}
      slidesPerView={1}
      centeredSlides={true}
      // autoHeight={true}
      autoFocus={true}
      navigation
      speed={3000}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img className="" src="/broderie/img_11.jpg"></img>
      </SwiperSlide>
      <SwiperSlide>
        {/* <img src="/enseignes/img_15.jpg"></img> */}
        <div className="w-64 h-64 object-cover bg-orange-500"></div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-screen object-cover"
          src="/serigraphie/img_2.png"
        ></img>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-screen object-cover"
          src="/nos-realisations/img_4.png"
        ></img>
      </SwiperSlide>
    </Swiper>
  );
}
