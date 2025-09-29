import React from "react";
import emailjs from "emailjs-com";
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaInstagram, FaHackerrank, FaGlobe } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import "./Contact.css";

function Contact() {
  const contacts = [
    { icon: <FaPhone />, label: "Phone", value: "+91 - 9344336967" },
    { icon: <FaEnvelope />, label: "College Email", value: "dhavamani.cs23@bitsathy.ac.in" },
    { icon: <FaEnvelope />, label: "Personal Email", value: "s.dhavamani6967@gmail.com" },
  ];

  const socials = [
    { icon: <FaGithub />, name: "GitHub", link: "https://github.com/Dhavamani-S" },
    { icon: <FaLinkedin />, name: "LinkedIn", link: "https://www.linkedin.com/in/dhavamani-s-842813290/" },
    { icon: <SiLeetcode />, name: "LeetCode", link: "https://leetcode.com/u/dhavamani/" },
    { icon: <FaHackerrank />, name: "HackerRank", link: "https://www.hackerrank.com/profile/s_dhavamani6967" },
    { icon: <SiCodechef />, name: "CodeChef", link: "https://www.codechef.com/users/dhavamani" },
    { icon: <FaInstagram />, name: "Instagram", link: "https://www.instagram.com/dhava__25?igsh=dDVzYXplZ2tsam14" },
    { icon: <FaGlobe />, name: "TUF", link: "https://takeuforward.org/profile/Dhava_S" }
  ];

  const sendEmail = (e) => {
    e.preventDefault(); // prevent page reload

    emailjs.sendForm(
      "service_vjshweu",
      "YOUR_TEMPLATE_ID", // replace with your EmailJS template ID
      e.target,
      "_MQ-Xl0wfZP1c6lQ4"
    ).then(
      (result) => {
        alert("Message sent successfully!");
        e.target.reset();
      },
      (error) => {
        alert("Failed to send the message. Please try again.");
        console.error(error);
      }
    );
  };

  return (
    <section id="contact" className="contact">
      <h1 className="contact-main-title">Contact Me</h1>

      <div className="contact-info">
        {contacts.map((item, idx) => (
          <div key={idx} className="contact-item">
            <span className="icon">{item.icon}</span>
            <div>
              <h4>{item.label}</h4>
              <p>{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="social-title">Connect with me</h2>
      <div className="social-grid">
        {socials.map((social, idx) => (
          <a key={idx} href={social.link} target="_blank" rel="noopener noreferrer" className="social-card">
            <span className="social-icon">{social.icon}</span>
            <span className="social-name">{social.name}</span>
          </a>
        ))}
      </div>

      <p className="cta-text">Let’s connect and build something amazing together 🚀</p>
    </section>
  );
}

export default Contact;
