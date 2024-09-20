import React from "react";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <div
      data-aos="fade-down"
      className="fixed top-0 right-0 w-full z-50  py-4 sm:py-4"
    >
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex text-white items-center gap-4 font-bold text-2xl">
            <img src={logo} alt="" className="w-10" />
            <span>Travio</span>
          </div>

          <div className="text-white hidden md:block bg-[#333333] border-3 border-black opacity-80  w-full max-w-md mx-auto rounded-lg shadow-lg">
            <ul className="flex items-center justify-center gap-8 text-xl  py-4 sm:py-2 ">
              <li className="hover:text-purple-400 transition-colors duration-300">
                <a href="#">About</a>
              </li>
              <li className="hover:text-purple-400 transition-colors duration-300">
                <a href="#">Features</a>
              </li>
              <li className="hover:text-purple-400 transition-colors duration-300">
                <a href="#">Partners</a>
              </li>
              <li className="hover:text-purple-400 transition-colors duration-300">
                <a href="#">Docs</a>
              </li>
            </ul>
          </div>

          <div>
            <button className="text-white hover:bg-black  border-2 border-purple-600 px-3 py-1 rounded-md">
              Get Started!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
