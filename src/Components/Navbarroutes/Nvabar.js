import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="head__navbar shadow-lg p-1" style={{textAlign:"right",}}>
        <ul
          className="navbar__list"
        >
          <li>
            <NavLink className="navbar__links" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className="navbar__links" to="/about">About</NavLink>
          </li>
          <li>
            <NavLink className="navbar__links" to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink className="navbar__links" to="/service">Service</NavLink>
          </li>
          <li>
            <NavLink className="navbar__links" to="/hookuseparam/shubham">Shubham</NavLink>
          </li>
          <li>
            <NavLink className="navbar__links" to="/hookuseparam/shivam">Shivam</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
