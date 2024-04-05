import Image from "next/image";
import Navbar from "./Navbar";
import Banner from "./ui/components/Banner";
import Carousel from "./ui/components/Carousel";
import { promises as fs } from "fs";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/app/data/data.json", "utf8");
  const data = JSON.parse(file);

  return (
    <>
      <header className="mt-0">
        <div>
          <h1>{data.title}</h1>
          <p>{data.content}</p>
        </div>

        {/* <Banner title={""} description={""} src={""}></Banner> */}
        <Carousel
          index={0}
          title={""}
          content={""}
          src={""}
          buttonName={""}
        ></Carousel>
      </header>
      <section id="whoiam"></section>
      <section id="services"></section>
      <section id="news"></section>
      <section id="partners"></section>

      <footer></footer>
    </>
  );
}
