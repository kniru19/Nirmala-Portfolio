import React from "react";
import "./About.css";
import profilePic from "../../Images/nirmala.jpg";

const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src={profilePic} alt="profile pic" />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About Me</h1>
            <p>
              Delivered IT education to over 200+ secondary-level students,
              leveraging technical proficiency in web development and data tools
              to boost digital literacy and academic performance. Spearheaded
              administrative operations at ALFPHS INFOTECT, optimizing data
              workflows and improving service delivery efficiency by 30%. Now
              aiming to drive measurable impact in a results-oriented
              environment by combining crossfunctional communication, tech
              skills, and a continuous improvement mindset.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
