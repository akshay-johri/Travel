import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import MountainPng from "../../assets/moon-surface-hd.png";
function Hero() {
  return (
    <div className=" bg-black/20 h-full">
      <div className="h-full flex justify-center items-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="text-white space-y-4 lg:pr-36">
            <h1 data-aos="fade-up" className="text-5xl font-bold">
              Discover, Plan,
               and Book
            </h1>
            <br/>
            <p data-aos="fade-up" data-aos-delay="300">
            Explore the world like never before with AI-driven insights and customized itineraries, designed to turn every trip into a unique adventure.
            </p>
            <button data-aos="fade-up" data-aos-delay="300" className=" text-white border-2 bg-black flex justify-center items-center border-purple-900 hover:opacity-85 px-6 py-2 rounded-lg shadow-lg hover:shadow-xl font-semibold text-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              Book A Demo! <AiOutlineArrowRight className="ml-2" />
            </button>

          </div>
          
        </div>
      </div>
      {/* LAND SECTION  */}
     <img src={MountainPng} alt=""
        className="absolute right-0 bottom-0 w-full brightness-50 z-10"
     /> 
     {/* BOTTOM GRADIENT SECTON S */}
      <div className="absolute bottom-0 w-full z-30 bg-gradient-to-b from-transparent from-10% to-black to-90% h-[20px] sm:h-[50px] md:[60px] ">
     </div>
    </div>
  );
}

export default Hero;