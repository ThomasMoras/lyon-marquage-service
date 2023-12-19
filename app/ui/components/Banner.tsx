import React from "react";
import Test from "../../../public/images/img_13.jpg";

const Banner = ({
  title,
  description,
  src,
}: {
  title: string;
  description: string;
  src: string;
}) => (
  // <div className="hero min-h-16 bg-base-200">
  //   <div className="hero-content text-center">
  //     <div className="max-w-md">
  //       <h1 className="text-5xl font-bold">Hello there</h1>
  //       <p className="py-6">
  //         Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
  //         excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
  //         id nisi.
  //       </p>
  //       <button className="btn btn-primary">Get Started</button>
  //     </div>
  //   </div>
  // </div>
  <>
    <div
      className="hero min-h-screen banner-custom"
      style={{
        backgroundImage: `url(${Test.src})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  </>
);
export default Banner;
