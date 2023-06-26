import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix logo"
      />
      <img
        className="avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Avatar Logo"
      />
      <ul className="nav-links">
        <li>Home</li>
        <li>Movies</li>
        <li>TV Shows</li>
        <li>My List</li>
      </ul>
    </div>
  );
}

export default Navbar;
