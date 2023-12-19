import React from "react";
import Banner from "../ui/components/Banner";

const Enseigne = () => {
  return (
    <>
      <header className="mt-0">
        <Banner title={""} description={""} src={""}></Banner>
      </header>
      <section id="description"></section>
      <section id="vehicules"></section>
      <button>Consulter nos réalisations</button>
      <footer></footer>
    </>
  );
};

export default Enseigne;
