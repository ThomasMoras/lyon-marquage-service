import React from "react";

const Carousel = ({
  index,
  title,
  content,
  src,
  buttonName,
}: {
  index: number;
  title: string;
  content: string;
  src: string;
  buttonName: string;
}) => (
  <div>
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="text-white text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-6xl">Slide 1</h2>
          <p className="text-3xl">Some text describing slide 1.</p>
          <button className="btn btn-active btn-primary mt-12 ">
            Learn More
          </button>
        </div>
      </div>
      {/* Repeat the above structure for other slides */}
      <div id="slide2" className="carousel-item relative w-full">
        {/* ... */}
        <div className="text-white text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h2>Slide 2</h2>
          <p>Some text describing slide 2.</p>
          <button className="bt,">Learn More</button>
        </div>
      </div>
      {/* Repeat for other slides */}
    </div>
  </div>
);

export default Carousel;
