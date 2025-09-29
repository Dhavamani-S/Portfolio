import { useEffect, useState } from "react";
import myImage from "../assets/m.jpg";
import Sidebar from "../components/Sidebar";
import "./Home.css";

function Home() {
  const roles = ["Java Developer", "Frontend Developer", "Deep Learning Engineer","UI/UX Designer"];
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const role = roles[currentRole];
    setDisplayedText(""); // reset text
    const typingInterval = setInterval(() => {
      setDisplayedText(role.slice(0, index + 1));
      index++;
      if (index === role.length) clearInterval(typingInterval);
    }, 80);

    const timeout = setTimeout(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, role.length * 80 + 1500);

    return () => {
      clearInterval(typingInterval);
      clearTimeout(timeout);
    };
  }, [currentRole]);

  return (
    <div className="home-container">

      <div className="home-main-content">
        <div className="home-about-section">
          <h1 className="home-about-title">
            Hi, My name is <span className="home-about-name">Dhavamani S</span>
          </h1>

          {/* Fixed role container */}
          <div className="home-about-role-container">
            <span className="white-bold">I'm a </span>
            <span className="orange-typed">{displayedText}</span>
          </div>

          <p className="home-about-text">
          Motivated Computer Science student skilled in Java, AI, and Full Stack Development. 
          Eager to apply problem-solving and programming expertise to impactful projects. 
          Seeking an entry-level Java Developer role, with interest in AI and Full Stack opportunities.

          </p>
          <button 
  className="home-about-btn" 
  onClick={() => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }}
>
  More About Me
</button>

        </div>

        <div className="home-image-section">
  <div className="home-profile-image-wrapper">
    <img src={myImage} alt="Dhavamani" className="home-profile-image" />
  </div>
</div>

      </div>
    </div>
  );
}

export default Home;
