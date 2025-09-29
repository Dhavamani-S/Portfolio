import './About.css';
import Sidebar from '../components/Sidebar';

function About() {
  return (
    
    <section id="about" className="about">
      
      <h1 className="about-title"><span>About Me</span></h1>

      {/* One single intro line */}
      <p className="about-intro">
        Passionate about technology, coding, and innovation, 
        I strive to explore new possibilities, build impactful solutions, and continuously push the 
        boundaries of creativity and problem-solving in the digital world.
      </p>

      {/* Personal Info */}
      <div className="about-info">
        <div className="info-item"><span className="info-label">Full Name :</span><span className="info-value">Dhavamani S</span></div>
        <div className="info-item"><span className="info-label">Date of Birth :</span><span className="info-value">23/10/2005</span></div>
        <div className="info-item"><span className="info-label">Age :</span><span className="info-value">20</span></div>
        <div className="info-item"><span className="info-label">Location :</span><span className="info-value">Tiruppur, Tamil Nadu</span></div>
        <div className="info-item"><span className="info-label">College :</span><span className="info-value">Bannari Amman Institute of Technology</span></div>
        <div className="info-item"><span className="info-label">Degree :</span><span className="info-value">B.E. Computer Science & Engineering</span></div>
         <div className="info-item"><span className="info-label">Year :</span><span className="info-value">3rd Year</span></div>
        <div className="info-item"><span className="info-label">CGPA :</span><span className="info-value">8.29</span></div>
      </div>

      {/* Skills (left) + Education & Languages (right) */}
      <div className="about-sections">
        {/* Skills & Tools */}
        <div className="about-skills">
          <h2>Skills & Technologies</h2>
          <ul>
            <li><strong>Programming:</strong> Java, Python, C, C++</li>
            <li><strong>Database:</strong> MySQL</li>
            <li><strong>Frontend:</strong> HTML, CSS, JavaScript, React.js</li>
            <li><strong>ML/DL:</strong> Basics of Machine Learning & Deep Learning</li>
            <li><strong>Tools:</strong> VS Code, Figma, Canva, Git, GitHub</li>
          </ul>

          <div className="about-resume">
        <a 
          href="./Dhavamani_resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="resume-btn"
        >
          📄 Download Resume
        </a>
      </div>

        </div>

        {/* Education + Languages stacked */}
        <div className="education-languages">
          <div className="about-education">
            <h2>Education</h2>
            <ul>
              <li><strong>2023–2027:</strong> B.E. Computer Science, BIT</li>
              <li><strong>2021–2023:</strong> Model Higher Secondary School, Mulanur</li>
              <li><strong>2010–2021:</strong> Schooling</li>
            </ul>

            {/* Resume Download */}
      
          </div>

          <div className="about-languages">
            <h2>Languages Known</h2>
            <ul>
              <li>Tamil (Native)</li>
              <li>English (Fluent)</li>
            </ul>
          </div>
        </div>
      </div>

      

      {/* Note */}
      <div className="about-note">
        <p>
          Outside of academics, I enjoy exploring my creative side through drawing and cooking, 
          which help me stay imaginative and patient. Traveling allows me to experience new cultures and perspectives, 
          broadening my mindset. I also keep myself engaged with technology by reading blogs and participating in hackathons, 
          which fuel my curiosity and continuous learning.
        </p>
      </div>
    </section>
  );
}

export default About;
