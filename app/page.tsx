import { promises as fs } from "fs";

import MySwiper from "./ui/components/MySwiper";
import { JSX } from "react";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/app/data/data.json", "utf8");
  const data = JSON.parse(file);
  const DATA = [
    { image: "https://picsum.photos/seed/random101/500/500" },
    { image: "https://picsum.photos/seed/random102/500/500" },
    { image: "https://picsum.photos/seed/random103/500/500" },
  ];

  // const slides = [
  //   <img src="/broderie/img_11.jpg" alt="Slide 1" />,
  //   <img src="/broderie/img_5.jpg" alt="Slide 2" />,
  //   <img src="/broderie/img_14.jpg" alt="Slide 3" />,
  //   // Add more images or other content as needed
  // ];
  const slides = Array.from({ length: 10 }, (_, index) => index + 1);
  const bannerArray = [
    {
      title: "title 1",
      description: "desc 1",
      src: "/broderie/img_11.jpg",
      buttonName: "Name 1",
    },
    {
      title: "title 2",
      description: "desc 2",
      src: "/enseignes/img_16.jpg",
      buttonName: "Name 2",
    },
    {
      title: "title 3",
      description: "desc 3",
      src: "/serigraphie/img_13.jpg",
      buttonName: "Name 3",
    },
  ];
  return (
    <>
      <MySwiper bannerArray={bannerArray}></MySwiper>
      <section id="whoiam"></section>
      <section id="services"></section>
      <section id="news"></section>
      <section id="partners"></section>
      <footer></footer>
    </>
  );
}
