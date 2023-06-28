import React from "react";
import { logo } from "../assets";
// import {logo_adobe_express} from "../assets";
const Intro = () => {
  return (
    <header className="w-full flex flex-col justify-center items-center">
      <nav className="flex w-full mb-10 pt-3 justify-between items-center">
        <img src={logo} alt="logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() => window.open("https://github.com/gauravgupta1272")}
          className="black_btn"
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">Summarize Articles<br /><span className="blue_gradient">Using Web links</span></h1>
      <h2 className="desc"> Let's Simplify Reading !!!  </h2>
    </header>
  );
};

export default Intro;
