import React from "react";
import orangeLogo from "../../Assets/orange.png";
import {CartWidget} from './CartWidget'
import "./navbar.scss";

export const Navbar = () => {
  const [isActive, setisActive] = React.useState(false);

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a href="/" className="navbar-item">
          <img src={orangeLogo} alt="Logo" />
        </a>

        <a
          onClick={() => {
            setisActive(!isActive);
          }}
          role="button"
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div
        id="navbarBasicExample"
        className={`navbar-menu ${isActive ? "is-active" : ""}`}
      >
        <div className="navbar-end">
          <div className="navbar-item">
            <a href="/" className="navbar-item">
              Home
            </a>
            <a href="/" className="navbar-item">
              Documentation
            </a>
            
           <CartWidget/>
          </div>
        </div>
      </div>
    </nav>
  );
};
