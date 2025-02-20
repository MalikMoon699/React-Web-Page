import React from "react";
import image1 from "./img/play-card.webp";
import image2 from "./img/portflo.avif";
import image3 from "./img/log.png";

const Creativity = () => {
  return (
    <div>
      <div className="main">
        <div className="viewPage">
          <h2>Explore More Coding Courses</h2>
          <h5>Discover a variety of coding courses tailored for you.</h5>
          <div className="creativityMain">
            <div className="Creativity">
              <img src={image1} />
              <h2>Play Station</h2>
              <h3>
                A PlayStation-inspired web platform to browse games, watch
                trailers, and stay updated.
              </h3>
              <div className="btnContainer">
                <button className="btn-1">
                  <a
                    target="_blank"
                    href="https://github.com/MalikMoon699/Play-Station-5"
                  >
                    Learn
                  </a>
                </button>
                <button className="btn-2">
                  <a
                    target="_blank"
                    href="https://malikmoon699.github.io/Play-Station-5/"
                  >
                    view
                  </a>
                </button>
              </div>
            </div>
            <div className="Creativity">
              <img src={image2} />
              <h2>Portfolio</h2>
              <h3>
                A dynamic portfolio showcasing projects using HTML, CSS, and
                JavaScript with responsive design and interactive elements.
              </h3>
              <div className="btnContainer">
                <button className="btn-1">
                  <a
                    target="_blank"
                    href="https://github.com/MalikMoon699/Portfolio"
                  >
                    Learn
                  </a>
                </button>
                <button className="btn-2">
                  <a
                    target="_blank"
                    href="https://malikmoon699.github.io/Portfolio/"
                  >
                    view
                  </a>
                </button>
              </div>
            </div>
            <div className="Creativity">
              <img src={image3} />
              <h2>login/SignUp</h2>
              <h3>
                Login and Sign up pages save in local storage by using HTML,CSS
                & JS
              </h3>
              <div className="btnContainer">
                <button className="btn-1">
                  <a
                    target="_blank"
                    href="https://github.com/MalikMoon699/Auth-with-JS-storing-data-in-local-storage"
                  >
                    Learn
                  </a>
                </button>
                <button className="btn-2">
                  <a
                    target="_blank"
                    href="https://malikmoon699.github.io/Auth-with-JS-storing-data-in-local-storage/"
                  >
                    view
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creativity;
