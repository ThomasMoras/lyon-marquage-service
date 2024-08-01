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
  EffectCreative,
} from "swiper/modules";
import Banner from "./Banner";

export default function MySwiper({ bannerArray }: any) {
  return (
    <Swiper
      className="max-h-screen"
      modules={[
        Autoplay,
        Navigation,
        Pagination,
        Scrollbar,
        A11y,
        EffectCreative,
      ]}
      spaceBetween={0}
      loop={true}
      navigation
      // effect="creative"
      // creativeEffect={{
      //   prev: {
      //     // will set `translateZ(-400px)` on previous slides
      //     translate: [0, 0, -400],
      //   },
      //   next: {
      //     translate: ["100%", 0, 0],
      //   },
      // }}
      speed={5000}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      scrollbar={{ enabled: true, draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {bannerArray.map((b: any, index: any) => (
        <SwiperSlide key={index}>
          <Banner
            title={b.title}
            description={b.description}
            src={b.src}
            buttonName={b.buttonName}
          ></Banner>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
