import './Sidebar.css';
import { useState, useEffect } from "react";
import { FaHome, FaUser, FaProjectDiagram, FaCertificate, FaEnvelope } from "react-icons/fa";

function Sidebar() {
  const menus = [
    { name: "Home", icon: <FaHome />, id: "home" },
    { name: "About", icon: <FaUser />, id: "about" },
    { name: "Project", icon: <FaProjectDiagram />, id: "projects" },
    { name: "Certification & Hackathon", icon: <FaCertificate />, id: "certificates" },
    { name: "Contact", icon: <FaEnvelope />, id: "contact" },
  ];

  const [active, setActive] = useState("home");

  // Scrollspy
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let current = "home";
      menus.forEach(menu => {
        const section = document.getElementById(menu.id);
        if (section) {
          const top = section.offsetTop - 100;
          const bottom = top + section.offsetHeight;
          if (scrollY >= top && scrollY < bottom) {
            current = menu.id;
          }
        }
      });
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setActive(id);
  };

  // Prevent page scroll when hovering over sidebar
  useEffect(() => {
    const sidebar = document.querySelector(".sidebar");

    const preventScroll = (e) => {
      e.preventDefault(); // stops page scrolling
    };

    sidebar.addEventListener("wheel", preventScroll, { passive: false });

    return () => sidebar.removeEventListener("wheel", preventScroll);
  }, []);

  return (
    <div className="sidebar">
      <h1 className="sidebar-title">My Portfolio</h1>
      <ul className="sidebar-menu">
        {menus.map((menu) => (
          <li
            key={menu.id}
            className={`sidebar-item ${active === menu.id ? "active" : ""}`}
            onClick={() => handleClick(menu.id)}
          >
            <span className="sidebar-icon">{menu.icon}</span>
            <span className="sidebar-text">{menu.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
