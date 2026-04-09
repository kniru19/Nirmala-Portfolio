import React from "react";
import "./Techstack.css";
import { techstackList } from "../../utils/TechstackList";

const Techstack = () => {
  return (
    <>
      <div className="container techstack" id="techstack">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Technology Stack
        </h2>
        <hr />
        <p className="pb-3 text-center">
          👉 Crafting full-stack experiences with React + Redux, Node/Express
          APIs, MongoDB data flow, and polished responsive UI for today’s web
          users.
        </p>

        <div className="row">
          {techstackList.map((tech) => (
            <div key={tech._id} className="col-md-3">
              <div className="card m-2">
                <div className="card-content">
                  <div className="card-body">
                    <div className="media d-flex justify-content-center">
                      <div className="alig-self-center">
                        <tech.icon className="tech-icon" />
                      </div>
                      <div className="media-body">
                        <h5>{tech.name}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Techstack;
