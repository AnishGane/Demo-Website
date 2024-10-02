import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="absolute bottom-14 right-24 text-center  p-2 ">
      <p className="font-thin text-[26px]">Links</p>
      <div className="social flex items-center gap-8 mt-4 text-[31px]">
        <a href="https://www.facebook.com/enesh.ganeju" target="_blank">
          <FaFacebook />
        </a>
        <a href="https://www.youtube.com" target="_blank">
          <FaYoutube />
        </a>
        <a href="https://x.com/TDE_6Ani9" target="_blank">
          <RiTwitterXFill />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
