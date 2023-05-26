import { Link } from "react-router-dom";

import { useState } from "react";

function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav className="Header">
        {/* mobile */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
          <i className="fa-solid fa-xmark"></i>
            
            
          </div>
          <ul className="mobile-navbar__links">
            <li>
              <Link onClick={openNav} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/services">
                Services
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/about">
                About
              </Link>
            </li>
            
           
            <li>
              <Link onClick={openNav} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* desktop */}
        
        <div className="navbar">
          <div className="navbar__img">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <ul className="ln">
                <li className="logoname">W</li>
                <li className="logoname">e</li>
                <li className="logoname">b</li>
                <li className="logoname">b</li>
                <li className="logoname">y</li>
              </ul>
            </Link>
          </div>
          <ul className="navbar__links">
            <li>
              <Link className="home-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="services-link" to="/">
                Services
              </Link>
            </li>
            <li>
              <Link className="projects-link" to="/">
                Projects
              </Link>
            </li>
            <li>
              {" "}
              <Link className="about-link" to="/about">
                About
              </Link>
            </li>
            
            <li>
              {" "}
              <Link className="contact-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="navbar__buttons">
            
            <Link className="navbar__buttons__register" to="/">
              Get Started
            </Link>
          </div>
         
          {/* mobile */}
          <div className="mobile-hamb" onClick={openNav}>
          <i className="fa-solid fa-bars"></i>   
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
