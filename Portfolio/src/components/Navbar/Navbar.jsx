import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <h1 className="Nav-Title">Sebastian Ivanoff</h1>
      <ul className="Links-list">
        <li>
          <NavLink to={"/"} className="list-item">
            {" "}
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"about"} className="list-item">
            {" "}
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink to={"socials"} className="list-item">
            {" "}
            Socials
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
