import React from "react";
import { SiFreelancer } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../../pages/WorkExperience/WorkExperience.css";

const WorkExperience = () => {
  return (
    <>
      <div className=" work" id="workexperience">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase ">
            Work Experiences
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work "
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2023 - present"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<SiFreelancer />}
            >
              <h3 className="vertical-timeline-element-title">
                Graphic & Web Designer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Freelancer</h4>
              <p>
                Delivered polished web and graphic design work with strong UX,
                branding, and project coordination.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work "
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2022 - 2024"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<SiFreelancer />}
            >
              <h3 className="vertical-timeline-element-title">Teacher</h3>
              <h4 className="vertical-timeline-element-subtitle">
                New Horizon EBS, Nepal
              </h4>
              <p>
                Taught diverse student groups, developed engaging lesson plans,
                provided academic guidance, and fostered a positive learning
                environment.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work "
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2015 - 2019"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<SiFreelancer />}
            >
              <h3 className="vertical-timeline-element-title">
                Counselor & Data Operator
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Alfphs Infotech, India
              </h4>
              <p>
                Managed student records and databases, provided counseling
                support, ensured data accuracy, and coordinated administrative
                operations.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExperience;
