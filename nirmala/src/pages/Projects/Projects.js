import React from "react";
import "./Projects.css";
import Project1 from "../../Images/project1.jpg";

const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Top Recent Projects
        </h2>
        <hr />
        <p className="pb-3 text-center">
          Here are my recent projects with live links and source code.
        </p>
        {/* card design for projects */}
        <div className="row" id="ads">
          {/* Project1 */}
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img src={Project1} alt="project1" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">MongoDB</span>
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">Express</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Todo App</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/kniru19/Todo-App"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          {/* Project2 */}
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img
                  src="https://cdn.dribbble.com/userupload/46735101/file/d747a57c28db681ee4b280e7cfd057f0.png?resize=752x&vertical=center"
                  alt="project1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">MongoDB</span>
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">Gemini</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">AI Learning App</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/kniru19/Todo-App"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          {/* Project3  */}
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img src={Project1} alt="project1" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">MongoDB</span>
                <span className="card-detail-badge">React</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">E commerce Website</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/kniru19/Todo-App"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
