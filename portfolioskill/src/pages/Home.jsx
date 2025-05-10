import React from 'react';
import './Home.css';
import profile from '../images/profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';

function Home() {
  return (
    <div className="home-container">
      <div className="intro">
        <h1> 👋 Hi This is my Portfolio </h1>
        <p className="tagline">Aspiring Full-Stack Developer | React Enthusiast | Lifelong Learner</p>
        <p className="description">
          I design and develop dynamic, responsive websites using the latest technologies. 
          My goal is to create beautiful, user-friendly digital experiences that make an impact.
        </p>

        {/* Button Group Container */}
        <div className="button-group">
          <a href="/projects" className="explore-btn">Explore My Work</a>
          <a 
            href="https://drive.google.com/file/d/1jbYUryXwY-xYfTaYrvjASlS-4xx35eVp/view?usp=sharing" 
            className="download-cv-btn" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>

        {/* Social Icons */}
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/harshitha-pattem216" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
          <a href="https://github.com/vignajaini" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="icon" />
          </a>
        </div>
      </div>

      <div className="profile-pic">
        <img src={profile} alt="Profile" />
      </div>
    </div>
  );
}

export default Home;
