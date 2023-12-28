import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  return (
    <>
      <footer>
        <nav>
          <div className="nav-links-container">
            <ul className="nav-links">
              <li>
                <ScrollLink to="about" smooth={true} duration={500}>
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="experience" smooth={true} duration={500}>
                  Experience
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="projects" smooth={true} duration={500}>
                  Projects
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="contact" smooth={true} duration={500}>
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </div>
        </nav>
        <p>Copyright &#169; 2023 John Doe. All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default Footer;
