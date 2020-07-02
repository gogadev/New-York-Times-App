import React from "react";
import { NavLink } from "react-router-dom";

import img from "../../assets/img.jpg";

import "./navbar.style.css";

const Navbar = () => {
  return (
    <nav>
      <h1 className="title">New York Times App</h1>
      <img className="img" src={img} alt="" />
      <div className="menu">
        <ul className="list">
          <NavLink to="/">
            {" "}
            <li>Home</li>
          </NavLink>
          <NavLink to="/subscribe">
            {" "}
            <li>Subscribe</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
