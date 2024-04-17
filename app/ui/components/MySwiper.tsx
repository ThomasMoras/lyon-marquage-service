"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import Banner from "./Banner";

export default function MySwiper() {
  const slides = [
    { src: "/broderie/img_11.jpg" },
    { src: "/serigraphie/img_2.png" },
    { src: "/enseignes/img_15.jpg" },
    { src: "/serigraphie/img_25.jpg" },
  ];

  return (
    <Swiper
      className="max-h-screen"
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      navigation
      speed={5000}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      scrollbar={{ enabled: true, draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          {/* {slide.src && (
            <img
              className="w-screen object-cover"
              src={slide.src}
              alt={`Slide ${index}`}
            />
          )} */}
          <Banner
            title={"Lyon Marquage"}
            description="blablabalabla"
            src={"/broderie/img_11.jpg"}
            buttonName="En savoir plus"
          ></Banner>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
