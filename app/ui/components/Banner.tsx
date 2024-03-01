import React from "react";

const Banner = ({
  title,
  description,
  buttonName,
  src,
}: {
  title: string;
  description: string;
  buttonName: string;
  src: string;
}) => (
  <>
    <div
      className="hero min-h-screen banner-custom"
      style={{
        backgroundImage: `url(${src})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-xl">
          <h1 className="mb-8 text-6xl font-bold">{title}</h1>
          <p className="mb-5 text-lg italic">{description}</p>
          <button className="btn btn-secondary">{buttonName}</button>
        </div>
      </div>
    </div>
  </>
);
export default Banner;
