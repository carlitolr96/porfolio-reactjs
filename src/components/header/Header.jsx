import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";

function Header() {
  return (
    <header>
      <section id="header">
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Carlos Rivera</h1>
          <h5 className="text-light">FrontEnd Developer</h5>

          <CTA />

          <div className="me">
            <img src={ME} alt="me" />
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
