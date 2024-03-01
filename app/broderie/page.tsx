import React from "react";
import Banner from "../ui/components/Banner";
import { promises as fs } from "fs";

const Broderie = async () => {
  const file = await fs.readFile(process.cwd() + "/app/data/data.json", "utf8");
  const data = JSON.parse(file);

  return (
    <>
      <header className="mt-0">
        <Banner
          title={data.broderie.title}
          description={data.broderie.content}
          src={data.broderie.img}
          buttonName="En savoir plus"
        ></Banner>
      </header>
      <section id="description"></section>
      <section id="supports"></section>
      <section id="avantages"></section>
      <section id="realisation"></section>
      <button>Consulter nos réalisations</button>
      <footer></footer>
    </>
  );
};

export default Broderie;
