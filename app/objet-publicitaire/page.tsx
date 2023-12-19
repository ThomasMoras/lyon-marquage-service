import React from "react";
import Banner from "../ui/components/Banner";

const ObjectPublicitaire = () => {
  return (
    <>
      <header className="mt-0">
        <Banner title={""} description={""} src={""}></Banner>
      </header>
      <section id="description"></section>
      <section id="objets-publicitaires"></section>
      <button>Consulter nos réalisations</button>
      <footer></footer>
    </>
  );
};

export default ObjectPublicitaire;
