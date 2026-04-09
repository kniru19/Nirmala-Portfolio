import React from "react";
import { useTheme } from "../../Context/ThemeContext";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import "./Home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../assests/docs/Nirmala.pdf";

const Home = () => {
  const [theme, setTheme] = useTheme();
  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        <div className="container home-content">
          <h2>Hii 👋 I'm a </h2>
          <h1>
            <Typewriter
              options={{
                strings: [
                  "Full Stack Developer !",
                  "MERN Stack Developer !",
                  "React Developer !",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="home-buttons">
            <a
              className="btn btn-hire"
              href="https:/api.whatsapp.com/send?phone=+358449327574"
              rel="noreferrer"
              target="_blank"
            >
              Hire me
            </a>

            <a
              className="btn btn-cv"
              href={Resume}
              download="Nirmala.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
