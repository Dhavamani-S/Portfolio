import { useState } from "react";
import "./Certificates.css";

function Certificates() {
  const certificates = [
    { src: "./certificate/NPTEL-Certificate.png", title: "NPTEL Certificate", desc: "Successfully completed NPTEL course with certification." },
    { src: "./certificate/Python_certificate-Coursera.png", title: "Python Certificate", desc: "Coursera certification for Python specialization." },
    { src: "./certificate/javascript-hackerrank.png", title: "JavaScript Certificate", desc: "HackerRank certification in JavaScript." },
    { src: "./certificate/css-hackerrank.png", title: "CSS Certificate", desc: "HackerRank certification in CSS." },
    { src: "./certificate/Responsive-freecode.png", title: "Responsive Web Design", desc: "FreeCodeCamp Responsive Web Design certification." },
    { src: "./certificate/GreatLearning-DS.png", title: "Data Science with Python", desc: "Great Learning certification for Data Science using Python." }
  ];

  const hackathons = [
    {
      src: "./hackathon/Hackspora-certificate.png",
      presentation: "./hackathon/hackspora-present.jpg",
      title: "HackSpora Hackathon",
      desc: `HackSpora 2k25 – AI-Based Medical Imaging Analysis
Participated in my first national-level hackathon with Team HACKAHOLICS, developing an AI solution to detect anomalies in X-rays, CTs & MRIs, generate automated reports, and support rural healthcare. Went through two review rounds and gained hands-on experience in AI, healthcare tech, teamwork, and rapid problem-solving under pressure.`
    },
    {
      src: "./hackathon/ideathon-certificate.png",
      presentation: "./hackathon/ideathon-present.png",
      title: "IDEATHON 2025",
      desc: `IDEATHON 2025 – Developed LungVision, an AI-powered Chest Infection Diagnosis System with Team Scanova. Detected COVID-19, Pneumonia, and other infections using X-rays & CT scans. Reached the final round, gaining hands-on experience in deep learning, model explainability (Grad-CAM), and optimized healthcare solutions.`
    }
  ];

  const [modalImage, setModalImage] = useState(null);

  const openModal = (img) => setModalImage(img);
  const closeModal = () => setModalImage(null);

  return (
    <section id="certificates" className="certificates">
      <h1 className="section-main-title">Certification & Hackathons</h1>

      {/* Certificates Section */}
      <h2 className="section-sub-title">Certificates</h2>
      <div className="certificates-scroll">
        {certificates.map((cert, idx) => (
          <div key={idx} className="certificate-card" onClick={() => openModal(cert.src)}>
            <div className="certificate-details">
              <h3>{cert.title}</h3>
              <p>{cert.desc}</p>
            </div>
            <img src={cert.src} alt={cert.title} className="certificate-img" />
          </div>
        ))}
      </div>

      {/* Hackathons Section */}
      <h2 className="section-sub-title">Hackathons</h2>
      <div className="hackathon-list">
        {hackathons.map((hack, idx) => (
          <div key={idx} className="hackathon-card">
            <div className="hackathon-left">
              <img
                src={hack.src}
                alt={hack.title}
                className="hackathon-img"
                onClick={() => openModal(hack.src)}
              />
              <img
                src={hack.presentation}
                alt={`${hack.title} Presentation`}
                className="hackathon-img"
                onClick={() => openModal(hack.presentation)}
              />
            </div>
            <div className="hackathon-right">
              <h3>{hack.title}</h3>
              <p>{hack.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for certificates & hackathon images */}
      {modalImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <img src={modalImage} alt="Preview" />
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificates;
