import "./AboutPage.css";

// libraries 
import React from "react";

/**
 * This Component renders an Info Page. displaying some Info about how and why the project was created.
 */
const AboutPage = () => {
  return (
    <div className="about-page-container">
      <h1>About this Project</h1>

      <h2>Purpose</h2>
      <p>
        The goal of this project is to provide students, or anyone else who is
        interested in data structures, with the best tool to learn about the
        functionality and algorithms of tree structures.
      </p>

      <h2>Development</h2>

      <div className="development-section">
        <p>Developed by:</p>
        <p>
          Prashant Tak
          <br />
          <a href="mailto:Prashanttak04@gmail.com">
            Prashanttak04@gmail.com
          </a>
          <br />
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
