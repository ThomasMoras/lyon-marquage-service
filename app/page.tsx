import { promises as fs } from "fs";
import SwiperDemo from "./ui/components/SwiperDemo";

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

  return (
    <>
      <header className="mt-0">
        <div>
          <h1>{data.title}</h1>
          <p>{data.content}</p>
        </div>
        <SwiperDemo></SwiperDemo>
      </header>
      <section id="whoiam"></section>
      <section id="services"></section>
      <section id="news"></section>
      <section id="partners"></section>

      <footer></footer>
    </>
  );
}
