import React from 'react';
import './ConnectStyle.css'; 
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import { SiGeeksforgeeks } from 'react-icons/si';
import { VscFilePdf } from 'react-icons/vsc';

const connectLinks = [
  {
    href: "https://github.com/Nishayadav02",
    icon: <FaGithub size={40} />,
    title: "GitHub",
    description: "Explore my projects and repositories on GitHub.",
  },
  {
    href: "https://www.linkedin.com/in/nisha-yadav-cs2348",
    icon: <FaLinkedin size={40} />,
    title: "LinkedIn",
    description: "Connect with me on LinkedIn and stay updated.",
  },
  {
    href: "https://leetcode.com/u/Nishaa_yadav/",
    icon: <FaCode size={40} />,
    title: "Leetcode",
    description: "Improve my algorithm skills with coding challenges.",
  },
  {
    href: "/resume.pdf", // Make sure resume.pdf is in the public folder
    icon: <VscFilePdf size={40} />,
    title: "Resume",
    description: "View my professional experience and qualifications.",
  },
];

const Connect = () => {
  return (
    <div className="connect-section">
      <h2 className="connect-heading">Let's Connect</h2>
      <p className="connect-subheading">
        Feel free to reach out, connect, or check out my profiles.
      </p>
      <div className="connect-container">
        {connectLinks.map((link, index) => (
          <a
            href={link.href}
            key={index}
            className="connect-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card-icon">{link.icon}</div>
            <h3 className="card-title">{link.title}</h3>
            <p className="card-description">{link.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Connect;