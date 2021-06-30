import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Nav = () => {
  return (
    <div>
      <nav className="nav">
        <div className="nav-continer">
          <div className="nav-logo">
            <a className="logo" href="#">
              Logo
            </a>
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to="/addJsPost">Add Js Post</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
