import React from "react";
import bgVideo2 from "../../assets/beutifull nature.mp4";

function Banner() {
  return (
    <div className="bg-black text-white pb-12 relative z-50">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
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
          <div className="space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800">
            <p data-aos="fade-up" data-aos-delay="300" className="uppercase">
              Our Mission!
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              className="uppercase text-3xl"
            >
              Adventure Awaits – Where Will You Go Next?
            </h1>
            <p data-aos="fade-up" data-aos-delay="500">
              Dive into a world of endless possibilities and unparalleled
              experiences. From breathtaking landscapes to hidden gems, our
              platform is designed to help you discover your next great
              adventure. Whether you’re a seasoned traveler or just beginning,
              let us guide you on a journey that will leave you with
              unforgettable memories.
            </p>

            <button
              data-aos="fade-up"
              data-aos-delay="700"
              className="text-white border-2 border-purple-600 px-3 py-1 rounded-md"
            >
              Get Started!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
