import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdCall, MdMessage } from "react-icons/md";

function Footer() {
  return (
    <div className="bg-gray-800 text-white px-5 relative z-50">
      <section className="max-w-[1200px] mx-auto text-white">
        <div className="grid md:grid-cols-3 py-5 gap-10">
          {/* FIRST COLUMN */}
          <div className="py-8 px-4">
            <h1 className="text-xl sm:text-3xl font-bold mb-3">
              Budget-Friendly Suggestions
            </h1>
            <p className="mb-4">
              Get Exclusive <span className="font-bold">Updates</span> Straight to Your Inbox
            </p>
            <div className="flex items-center h-10">
              <input
                type="text"
                className="py-2 px-3 w-full bg-gray-700 text-white border border-gray-600 rounded-l focus:outline-none focus:border-blue-400"
                placeholder="Email"
              />
              <button className="bg-black text-white px-4 py-2 rounded-r hover:bg-gray-900">
                Ok!
              </button>
            </div>
          </div>

          {/* SECOND COLUMN */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 gap-6 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold mb-3">Legal</h1>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a href="#" className="hover:underline">Terms of Service</a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold mb-3">Support</h1>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a href="#" className="hover:underline">Find Destination</a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">FAQ</a>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold mb-3">Contact Us</h1>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <HiLocationMarker />
                    <p>Prayagraj, Uttar Pradesh</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <MdMessage />
                    <p>Travio29@Gmail.com</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <MdCall />
                    <p>+91-653565357</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="w-full border-t-2 border-gray-400 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <span className="text-sm text-gray-400">
              Copyright &copy; 2024 by TRAVIO
            </span>

            <div className="flex items-center gap-6">
              <a href="#">
                <FaInstagram className="text-2xl hover:text-gray-400 transition-colors" />
              </a>
              <a href="#">
                <FaFacebook className="text-2xl hover:text-gray-400 transition-colors" />
              </a>
              <a href="#">
                <FaLinkedin className="text-2xl hover:text-gray-400 transition-colors" />
              </a>
            </div>

            <ul className="flex gap-6 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:underline">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Terms & Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
