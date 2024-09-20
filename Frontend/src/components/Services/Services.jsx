import React from "react";
import { FaPlane, FaHotel, FaMapMarkedAlt } from "react-icons/fa";
import wave from "../../assets/wave Gif.gif";

const ServiceData = [
  {
    title: "Flight Booking",
    content: "Worldwide destinations",
    description:
      "Find and book the best flights to amazing destinations around the globe, with competitive pricing and reliable service.",
    icon: <FaPlane className="text-7xl text-blue-500" />,
    aosDelay: "300",
  },
  {
    title: "Hotel Stays",
    content: "Luxury & budget options",
    description:
      "Choose from a variety of accommodations, ranging from luxury hotels to budget-friendly stays, tailored to your travel needs.",
    icon: <FaHotel className="text-7xl text-green-500" />,
    aosDelay: "500",
  },
  {
    title: "Guided Tours",
    content: "Explore iconic sites",
    description:
      "Discover the world's most famous landmarks and hidden gems with expert-led guided tours designed for the curious traveler.",
    icon: <FaMapMarkedAlt className="text-7xl text-red-500" />,
    aosDelay: "700",
  },
];

function Services() {
  return (
    <div className="bg-white text-black min-h-screen flex justify-center items-center relative z-[50]">
      <div className="container">
        {/* Card with animation */}
        <div className="min-h-[80vh] max-w-[90%] mx-auto p-8 rounded-2xl bg-white shadow-2xl relative overflow-hidden animate-fade-in">
          {/* Blurry effect at the top */}
          <div className="absolute top-0 left-0 w-full h-[100px] bg-gradient-to-b from-white via-white/80 to-transparent backdrop-blur-md z-10"></div>

          {/* Content */}
          <div
            data-aos="fade-up"
            className="flex flex-col gap-6 justify-center items-center bg-white text-center py-8 px-3 relative z-20"
          >
            <h1 className="text-5xl mb-6 font-bold">Explore Travel Services</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {ServiceData.map((data, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center gap-4 transition-transform transform hover:scale-105 duration-300"
                >
                  {data.icon}
                  <h2 className="text-3xl font-semibold">{data.title}</h2>
                  <p className="text-xl">{data.content}</p>
                  <p className="text-md">{data.description}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Wave image */}
          <img
            src={wave}
            alt="wave"
            className="h-[150px] w-full object-cover mix-blend-screen -translate-y-12 relative z-[0]"
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
