import React from 'react';
import './Projects.css'; 
import portfolioimage from '../images/portfolioimage.png'; 
import ecommerce from  '../images/ecommerce.png';
import taskmanager from '../images/taskmanager.png';
import stockmarket from '../images/stockmarket.png';
import mailapp from '../images/mailapp.png';
import neuralnet from '../images/neuralnet.png';

const projectData = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing my skills, projects, and achievements.',
    techStack: 'React, Vite, CSS, HTML',
    image: portfolioimage,
    github: 'https://github.com/yourusername/portfolio',
    liveLink: 'https://colorlib.com/wp/cat/portfolio/',
  },
  {
    title: 'E-Commerce Website',
    description: 'A full-featured e-commerce website with user authentication, product listings, and cart functionality.',
    techStack: 'React, Node.js, MongoDB, Express',
    image: ecommerce,
    github: 'https://github.com/yourusername/ecommerce-website',
    liveLink: 'https://www.shopify.com/in/ppc/ecommerce-business?utm_medium=cpc&utm_source=yabing&jk=ecommerce%20web&utm_source=yabing&utm_medium=cpc&utm_campaign=Paid%20Search%20-%20Bing%20-%20India%20-%20Ecommerce%20-%20English&bingadgroupid=1225955717528401&bingadid=76622380448278&bingkeywordid=76622438086989&bingnetwork=o&BOID=none&msclkid=b447cb2074341646306ba33fd7f27eb4&utm_term=ecommerce%20web&utm_content=Ecommerce%20-%20Ecommerce%20Website',
  },
  {
    title: 'Task Manager App',
    description: 'A task management app with features like creating, editing, deleting, and organizing tasks.',
    techStack: 'React, Firebase',
    image: taskmanager,
    github: 'https://github.com/yourusername/task-manager',
    liveLink: 'https://taskmanager.com',
  },
  {
    title: 'Stock Market Dashboard',
    description: 'A dashboard displaying trending stocks, news, and charts with filtering and dark mode support.',
    techStack: 'React, Tailwind, Recharts, Framer Motion',
    image: stockmarket,
    github: 'https://github.com/yourusername/stock-market-dashboard',
    liveLink: 'https://stockdashboard.com',
  },
  {
    title: 'Django Mail App',
    description: 'A web application that sends orientation invites to students using Django and SMTP.',
    techStack: 'Django, HTML, CSS, SQLite',
    image: mailapp,
    github: 'https://github.com/yourusername/django-mail-app',
    liveLink: 'https://mailappdemo.com',
  },
  {
    title: 'Neural Network from Scratch',
    description: 'Implemented a simple neural network using NumPy with forward & backpropagation.',
    techStack: 'Python, NumPy',
    image: neuralnet,
    github: 'https://github.com/yourusername/neural-network',
    liveLink: 'https://colab.research.google.com/drive/demo-link',
  },
];

function Projects() {
  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-tech">Tech Stack: {project.techStack}</p>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">GitHub</a>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="live-link">Live Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
