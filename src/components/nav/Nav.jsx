import React from "react";
import "./nav.css";
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { BiWorld } from 'react-icons/bi';
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#header"
        rel="noreferrer"
        onClick={() => setActiveNav("#header")}
        className={activeNav === "#header" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#world"
        rel="noreferrer"
        onClick={() => setActiveNav("#world")}
        className={activeNav === "#world" ? "active" : ""}
      >
        <BiWorld />
      </a>
      <a
        href="#about"
        rel="noreferrer"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        rel="noreferrer"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        rel="noreferrer"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        rel="noreferrer"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
