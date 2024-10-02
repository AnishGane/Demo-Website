import React from "react";
import styles from "../components/Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav className="w-full h-24 flex justify-between items-center pt-4">
        <a href="/" className="relative">
          <h2 className="text-4xl font-medium leading-tight">Dius Gures</h2>
          <div className="absolute right-[3px] w-[38%] h-[3px] rounded-full bottom-[2px] bg-black"></div>
        </a>
        <ul className="flex items-center gap-16 font-thin tracking-tight ">
          <li>
            <a href="#">About Us</a>
            <hr className={styles.hrLine} />
          </li>
          <li>
            <a href="#">Project</a>
            <hr className={styles.hrLine} />
          </li>
          <li>
            <a href="#">Services</a>
            <hr className={styles.hrLine} />
          </li>
          <li>
            <a href="#">Contact Us</a>
            <hr className={styles.hrLine} />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
