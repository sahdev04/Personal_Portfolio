import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/app.jpg";
import editor from "../../Assets/Projects/image.png";
import chatify from "../../Assets/Projects/yourlab.png";

import bitsOfCode from "../../Assets/Projects/image.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="YOURLab"
              description="YOURLab is a dedicated website built using Next.js and Tailwind CSS, designed to provide users with a seamless and responsive platform for accessing healthcare services. The website allows users to book doctor appointments, schedule pathology lab tests, order medicines, and manage their health history efficiently.

With its modern technology stack, YOURLab ensures fast performance, a clean user interface, and compatibility across devices, making it a reliable and user-friendly solution for digital healthcare needs."
              ghLink="https://github.com/sahdev04/yourlab_website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Doctello"
              description="Doctello provide Appointment System using which patients can book the appointment with doctors with there own preferred time slot and day. Gone the time when we need to sit in long queues for our number to come, now you have Doctello to do it all.Technologies Used
HTML
CSS
JavaScript
MySQL
PHP"
              ghLink="https://github.com/sahdev04/Doctello"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Patient_APP"
              description="Patient App is a mobile application designed to help patients access healthcare services conveniently from their homes. It allows users to book doctor appointments, schedule pathology lab tests, order medicines, and manage their health history with ease. This app has been developed using React Native technology, making it efficient and compatible across multiple platforms. It represents a significant step towards digitizing and simplifying healthcare services."
              ghLink="https://github.com/sahdev04/Patient_APP"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
