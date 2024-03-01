import React from "react";
import Banner from "../ui/components/Banner";
import { promises as fs } from "fs";

const ObjectPublicitaire = async () => {
  const file = await fs.readFile(process.cwd() + "/app/data/data.json", "utf8");
  const data = JSON.parse(file);
  return (
    <>
      <header className="mt-0">
        <Banner
          title={data.objetsPublicitaires.title}
          description={data.objetsPublicitaires.content}
          src={data.objetsPublicitaires.img}
          buttonName="En savoir plus"
        ></Banner>{" "}
      </header>
      <section id="description"></section>
      <section id="objets-publicitaires"></section>
      <button>Consulter nos réalisations</button>
      <footer></footer>
    </>
  );
};

export default ObjectPublicitaire;
