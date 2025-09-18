import React, { useState } from "react";
import "./NavbarStyle.css";
import { Link } from "react-scroll";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <nav className="header">
      <div className="logo">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          duration={30}
          onClick={closeMenu}
        >
          {/* <div className="logo-img">
            <span className="blink">&lt;</span>
            <span>&#47;</span>D<span className="blink">&gt;</span>
          </div> */}
        </Link>
      </div>

      {/* Grouping Nav and Social links for easier styling */}
      <div className={click ? "nav-group active" : "nav-group"}>
        <ul className="nav-menu">
          <li>
            <Link className="navLink" activeClass="active" to="project" spy={true} smooth={true} duration={30} onClick={closeMenu}>
              Projects
            </Link>
          </li>
          <li>
            <Link className="navLink" activeClass="active" to="about" spy={true} smooth={true} duration={30} onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link className="navLink" activeClass="active" to="skills" spy={true} smooth={true} duration={30} onClick={closeMenu}>
              Skills
            </Link>
          </li>
          <li>
            <Link className="navLink" activeClass="active" to="contact" spy={true} smooth={true} duration={30} onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes className="bars" size={25} />
        ) : (
          <FaBars className="bars" size={25} style={{ color: "#fff" }} />
        )}
      </div>
    </nav>
  );
}
