import Image from "next/image";
import Navbar from "./Navbar";
import Banner from "./ui/components/Banner";

export default function Home() {
  return (
    <>
      <header className="mt-0">
        {/* <div className="banner banner-embroidery align-items-end d-flex h-100 p-30 p-sm-60 p-lg-80 p-xl-120 text-white">
          <div className="banner-container">
            <h1 className="font-weight-extra fz-32 fz-sm-40 fz-md-50 fz-lg-60 text-uppercase">
              Broderie sur textile{" "}
            </h1>

            <p className="font-1 fz-17 fz-md-18 fz-lg-20 lh-27 lh-md-28 lh-md-30 mt-10 bg-cyan-200 ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, ">
              Une manière solide et prestigieuse de personnaliser les vêtements
              de votre entreprise, association, club de sport ou club de loisirs
              en y brodant votre logo, texte ou visuel !{" "}
            </p>

            <a
              href="#advantages"
              className="anchor bg-white bg-blue--hover border-0 btn mt-40 px-30 shadow-none text-blue-200 text-white--hover"
              role="button"
            >
              En savoir plus <i className="fz-14 icon-arrow-right ml-10"></i>
            </a>
          </div>
        </div> */}

        <Banner title={""} description={""} src={""}></Banner>
      </header>
      <section id="whoiam"></section>
      <section id="services"></section>
      <section id="news"></section>
      <section id="partners"></section>

      <footer></footer>
    </>
  );
}
