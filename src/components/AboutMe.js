import React from "react";
import "./AboutMeStyle.css";
import aboutImage from "../images/about-me-nisha.png";

export default function AboutMe({ id }) {
  return (
    <div className="about-container" id={id}>
      <h2 className="about-heading">About Me</h2>

      <div className="about-content-wrapper"> 
        <div className="aboutMe-text">
          <h3>Hello, I'm Nisha 👋</h3>
          <p>
            I'm a passionate and detail-oriented developer, currently in my final year of <span>B.Tech in Computer Science & Engineering</span>. My main focus is on creating beautiful, functional, and fully responsive websites. I love bringing ideas to life in the browser and have a strong foundation in modern <span>frontend technologies</span>.
          </p>
          <p>
            To complement my frontend skills, I am actively expanding my knowledge of <span>backend development</span>, aiming to become a well-rounded full-stack developer. I am always eager to learn and take on new challenges, especially those that allow me to solve real-world problems.
          </p>
          <p>
            When I'm not coding, I express my creativity through <span>art, enjoying sketching and painting</span>. This artistic side helps me approach my development work with a better eye for design and user experience. I am currently looking for <span>new opportunities</span> where I can contribute my skills and grow as a developer.
          </p>
        </div>

        <div className="aboutMe-image">
          <img src={aboutImage} alt="Nisha Yadav - About Me" />
        </div>
      </div>

      <div className="background-name">Nisha</div>
    </div>
  );
}