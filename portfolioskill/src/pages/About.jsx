import React from 'react';
import './About.css';
import profile from '../images/profile.png'; 

function About() {
  return (
    <div className="about-container">
      <div className="about-image-wrapper">
        <img src={profile} alt="Profile" className="about-profile-pic" />
      </div>

      <h1>About Me</h1>

      <p className="about-intro">
        Hello! I'm a passionate Full-Stack Developer with a strong interest in building responsive,
        user-friendly web applications. I enjoy solving problems, learning new technologies, and creating impactful software.
      </p>

      <div className="about-section">
        <h2>Professional Summary</h2>
        <p>
          I’m a Computer Science undergraduate with a knack for developing scalable web apps using modern
          stacks like MERN, Django, and Spring Boot. I'm deeply interested in full-stack development, UI/UX design,
          and cloud-native solutions. I believe in continuous learning and contributing to open-source communities.
        </p>
      </div>

      <div className="about-section">
        <h2>Skills & Technologies</h2>
        <ul className="about-list">
          <li>💻 Frontend: React, HTML5, CSS3, JavaScript, Tailwind, Bootstrap</li>
          <li>🧠 Backend: Node.js, Express.js, Spring Boot, Django</li>
          <li>🗃️ Databases: MySQL, MongoDB</li>
          <li>⚙️ Dev Tools: Git, GitHub, VS Code, Postman, Figma</li>
          <li>☁️ Others: REST APIs, JWT Auth, Responsive Design, MVC Architecture</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>Certifications & Achievements</h2>
        <ul className="about-list">
          <li>🏆 Certified Software Engineer Intern – HackerRank</li>
          <li>✅ Infosys Certified in ReactJS, Bootstrap, JavaScript, HTML5, CSS3</li>
          <li>📜 Completed Google Cloud Fundamentals Course</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>Projects Overview</h2>
        <ul className="about-list">
          <li>📊 Stock Market Dashboard with live news, alerts, and charts</li>
          <li>📧 Django Mail App for orientation invites to students</li>
          <li>🌐 Portfolio Website with React & Spring Boot backend</li>
          <li>🧠 Neural Network from scratch using NumPy</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>Experience</h2>
        <p>
          <strong>Software Engineering Intern</strong> <br />
          Developed backend APIs using Spring Boot for profile management, integrated with React frontend, and implemented RESTful services with MySQL.
        </p>
      </div>

      <div className="about-section">
        <h2>Education</h2>
        <p>B.Tech in Computer Science - KL University</p>
      </div>

      <div className="about-section">
        <h2>Soft Skills</h2>
        <ul className="about-list">
          <li>🗣 Communication & Collaboration</li>
          <li>💡 Problem Solving</li>
          <li>📋 Time Management</li>
          <li>🔍 Attention to Detail</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>Languages Known</h2>
        <p>English, Telugu, Hindi</p>
      </div>

      <div className="about-section">
        <h2>Career Goals</h2>
        <p>
          My goal is to become a proficient full-stack engineer and contribute to impactful projects,
          ideally at a tech-forward organization. I'm also passionate about mentoring and open-source collaboration.
        </p>
      </div>
    </div>
  );
}

export default About;
