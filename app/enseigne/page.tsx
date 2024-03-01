import React from "react";
import Banner from "../ui/components/Banner";
import { promises as fs } from "fs";

const Enseigne = async () => {
  const file = await fs.readFile(process.cwd() + "/app/data/data.json", "utf8");
  const data = JSON.parse(file);

  return (
    <>
      <header className="mt-0">
        <Banner
          title={data.enseignes.title}
          description={data.enseignes.content}
          src={data.enseignes.img}
          buttonName="En savoir plus"
        ></Banner>{" "}
      </header>
      <section id="description"></section>
      <section id="vehicules"></section>
      <button>Consulter nos réalisations</button>
      <footer></footer>
    </>
  );
};

export default Enseigne;
