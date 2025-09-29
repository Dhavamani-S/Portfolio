import './Projects.css';
import { FaGithub } from "react-icons/fa"; 

function Projects() {
  return (
    <section id="projects" className="projects">
      <h1 className="projects-title"><span>Projects</span></h1>

      <div className="projects-container">
        
        {/* Project 1 */}
        <div className="project-card">
          <h2>CNN-based COVID-19 & Pneumonia Detection from X-rays </h2>
          <p>
            A machine learning based project that predicts COVID-19 and pneumonia 
            cases from medical datasets and X-ray images, aiming to assist in early 
            detection and diagnosis.
          </p>
          <ul className="tech-stack">
            <li>Python</li>
            <li>Machine Learning</li>
            <li>Deep Learning</li>
            <li>Transfer Learning</li>
            <li>NumPy / Pandas</li>
          </ul>
          <div className="project-links">
            <a href="https://github.com/Dhavamani-S" target="_blank" rel="noopener noreferrer">
             <FaGithub className="github-icon" /> GitHub </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <h2>Simple Chatbot Application</h2>
          <p>
           A simple chatbot application developed as a task project, designed to simulate 
           basic conversations and provide responses to predefined queries.
          </p>
          <ul className="tech-stack">
            <li>Python</li>
            <li>Flask</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
          <div className="project-links">
            <a href="https://github.com/Dhavamani-S/Chatbot" target="_blank" rel="noopener noreferrer">
            <FaGithub className="github-icon" /> GitHub </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;
