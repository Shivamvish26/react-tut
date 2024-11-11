import React from "react";
import { Link, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h1>Contact Us Page</h1>
      <h2>Here we have some other business</h2>
        <div className="p-2">
        <Link to='company' className="mr-3">Company</Link>
        <Link to='channel'>Channel</Link>
        </div>
      <Outlet/>
    </div>
  );
};

export default Contact;
