import { useEffect, useRef, useState } from "react";

export default  AutoScrollCards=()=>{
  const scrollRef = useRef(null);
  const [index, setIndex] = useState(0);
  const cardCount = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % cardCount);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.clientWidth * index,
        behavior: "smooth",
      });
    }
  }, [index]);

  return (
    <section
      ref={scrollRef}
      className="cardscroll flex overflow-x-scroll snap-x scroll-smooth w-full"
    >

      <div className="cardSame w-full flex-shrink-0 snap-center">
        <div className="cretive">
          <h2>Play Station</h2>
          <h3>A PlayStation-inspired web platform...</h3>
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
                View
              </a>
            </button>
          </div>
        </div>
        <a
          target="_blank"
          href="https://malikmoon699.github.io/Play-Station-5/"
        >
          <div className="cardbackground-1 samecard"></div>
        </a>
      </div>


      <div className="cardSame w-full flex-shrink-0 snap-center">
        <div className="cretive">
          <h2>Portfolio</h2>
          <h3>A portfolio showcasing projects...</h3>
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
                View
              </a>
            </button>
          </div>
        </div>
        <a target="_blank" href="https://malikmoon699.github.io/Portfolio/">
          <div className="cardbackground-2 samecard"></div>
        </a>
      </div>


      <div className="cardSame w-full flex-shrink-0 snap-center">
        <div className="cretive">
          <h2>Login/SignUp</h2>
          <h3>Login and Sign up pages...</h3>
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
                View
              </a>
            </button>
          </div>
        </div>
        <a
          target="_blank"
          href="https://malikmoon699.github.io/Auth-with-JS-storing-data-in-local-storage/"
        >
          <div className="cardbackground-3 samecard"></div>
        </a>
      </div>
    </section>
  );
}
