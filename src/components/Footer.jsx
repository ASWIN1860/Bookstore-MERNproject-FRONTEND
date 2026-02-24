import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="md:grid grid-cols-3 md:gap-9 bg-gray-900 text-white p-10">
        <div>
          <h2 className="font-bold text-2xl">ABOUT US</h2>
          <p className="text-justify mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium blanditiis deleniti tempora et, sed rem consectetur, non
            distinctio accusantium eveniet voluptatibus eius? Magnam similique
            ex eaque. Id deleniti temporibus molestias!
          </p>
        </div>
        <div>
          <h2 className="font-bold text-2xl">NEWS LETTER</h2>
          <p className="my-5">Stay updated with our latest trends</p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email ID"
              className="p-2 placeholder-gray-500 bg-white"
            />
            <button className="bg-yellow-400 py-3 px-2 ">
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-2xl">FOLLOW US</h2>
          <p className="my-5">Let us be social</p>
          <div className="flex gap-2">
            <FaInstagram  style={{fontSize:'25px'}}/>
            <RiTwitterXLine style={{fontSize:'25px'}}/>
            <FaFacebookF style={{fontSize:'22px'}}/>
            <FaLinkedin style={{fontSize:'25px'}}/>
          </div>
        </div>
      </div>
      <div className="bg-black p-2 text-center text-white text-md">
        Copyright &copy; 2026 Allrights Reserved | This website is made by{" "}<FaHeart className="inline text-yellow-300" /> Aswin
      </div>
    </>
  );
}

export default Footer;
