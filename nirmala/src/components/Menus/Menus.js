import React from "react";
import "./Menus.css";
import Zoom from "react-reveal/Zoom";

import { Link } from "react-scroll";
import profilePic from "../../Images/nirmala.jpg";
import {
  FcHome,
  FcAbout,
  FcBusinesswoman,
  FcBiotech,
  FcReading,
  FcVideoProjector,
  FcContacts,
} from "react-icons/fc";

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <Zoom>
            <div className="navbar-profile-pic">
              <img src={profilePic} alt="profile pic" />
            </div>
          </Zoom>

          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={200}
                >
                  <FcHome /> Home
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={200}
                >
                  <FcAbout /> About
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={200}
                >
                  <FcReading /> Education
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="techstack"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={200}
                >
                  <FcBiotech /> Tech Stack
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={200}
                >
                  <FcVideoProjector /> Projects
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="workexperience"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={200}
                >
                  <FcBusinesswoman /> Work Experience
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={200}
                >
                  <FcContacts /> Contact
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={200}
                >
                  <FcHome />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={200}
                >
                  <FcAbout />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={200}
                >
                  <FcReading />
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="techstack"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={200}
                >
                  <FcBiotech />
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={200}
                >
                  <FcVideoProjector />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="workexperience"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={200}
                >
                  <FcBusinesswoman />
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={200}
                >
                  <FcContacts />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menus;
