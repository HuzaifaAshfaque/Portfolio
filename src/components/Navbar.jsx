import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
  }

  return (
    <>
      <nav id="desktop-nav">
        <div className="logo">
        <ScrollLink to="/" smooth={true} duration={300}>
                Huzaifa Ashfaque
        </ScrollLink>
          </div>
        <div>
          <ul className="nav-links">
            <li>
              <ScrollLink to="about" smooth={true} duration={300}>
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="experience" smooth={true} duration={300}>
                Experience
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="projects" smooth={true} duration={300}>
                Projects
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="contact" smooth={true} duration={300}>
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">John Doe</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-links">
            <li>
              <ScrollLink to="about" smooth={true} duration={500} onClick={toggleMenu}>
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="experience" smooth={true} duration={500} onClick={toggleMenu}>
                Experience
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="projects" smooth={true} duration={500} onClick={toggleMenu}>
                Projects
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="contact" smooth={true} duration={500} onClick={toggleMenu}>
                Contact
              </ScrollLink>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
