import React from "react";
import logo from "../../assets/logo.png";
import bgVideo2 from "../../assets/good.mp4";

function Banner2() {
  return (
    <div className="bg-black text-white pb-12 relative z-50">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <div className="space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-sky-800 border-b-sky-800">
            <p data-aos="fade-up" className="uppercase">
              Our Mission!
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="500"
              className="uppercase text-3xl"
            >
              Embark on Unforgettable Journeys
            </h1>
            <p data-aos="fade-up" data-aos-delay="500">
              Set sail for new horizons and create memories that last a
              lifetime. Our curated travel experiences are designed to inspire
              and captivate, whether you're seeking thrilling adventures or
              serene escapes. Let us be your guide to exploring the world’s most
              enchanting destinations and discovering the wonders that await.
            </p>

            <button
              data-aos="fade-up"
              data-aos-delay="700"
              className="text-white border-2 border-purple-600 px-3 py-1 rounded-md"
            >
              Get Started!
            </button>
          </div>
          <div>
            <video
              autoPlay
              muted
              loop
              className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover rounded-lg shadow-lg border-2 border-gray-200 transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <source src={bgVideo2} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner2;
