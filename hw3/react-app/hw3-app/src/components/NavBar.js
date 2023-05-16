import React from "react";
import { BrowserRouter as Router, NavLink, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
import Houses from "./Houses";

function Navbar() {
  return (
    <Router>
      <nav>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <NavLink className={"nav-link"} to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={"nav-link"} to="/search">
              Search
            </NavLink>
          </li>
          <li>
            <NavLink className={"nav-link"} to="/houses">
              Houses
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/houses" element={<Houses />} />
      </Routes>
    </Router>
  );
}

export default Navbar;
