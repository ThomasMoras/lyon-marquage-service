import React from "react";
import Banner from "../ui/components/Banner";
import { promises as fs } from "fs";
import CustomRow from "../ui/components/CustomRow";

const Serigraphie = async () => {
  const file = await fs.readFile(process.cwd() + "/app/data/data.json", "utf8");
  const data = JSON.parse(file);
  return (
    <>
      <header className="mt-0">
        <Banner
          title={data.serigraphie.title}
          description={data.serigraphie.content}
          src={data.serigraphie.img}
          buttonName="En savoir plus"
        ></Banner>
      </header>
      <section id="description" className="mt-5">
        <CustomRow
          title={"Titre test"}
          desc={"description bbb"}
          imgs={[]}
        ></CustomRow>
      </section>
      <section id="impression-numerique"></section>
      <section id="transfert-laser"></section>

      <button>Consulter nos réalisations</button>

      <footer></footer>
    </>
  );
};

export default Serigraphie;
