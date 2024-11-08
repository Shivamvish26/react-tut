import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav>
        <ul
          style={{
            listStyleType: "none",
            padding: 0,
            display: "flex",
            gap: "10px",
          }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/service">Service</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
