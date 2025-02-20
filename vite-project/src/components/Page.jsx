import React from "react";
import "./CSS/Page.css";
import AutoScrollCards from "./AutoScrollCards";

const Page = () => {
  return (
    <div className="main">
      <section className="background">
        <h2>Master full-stack web development</h2>
        <h5>Learn HTML, CSS, JS, React</h5>
        <div className="btnContainer">
          <button className="btn-1">
            <a target="_blank" href="https://github.com/dashboard">
              Learn
            </a>
          </button>
          <button className="btn-2">
            <a
              target="_blank"
              href="https://malikmoon699.github.io/Play-Station-5/"
            >
              View
            </a>
          </button>
        </div>
        <a
          target="_blank"
          href="https://malikmoon699.github.io/Play-Station-5/"
        >
          <div className="card"></div>
        </a>
      </section>
      <AutoScrollCards />
    </div>
  );
};

export default Page;
