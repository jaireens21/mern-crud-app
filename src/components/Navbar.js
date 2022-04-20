import React from "react";
import {NavLink} from "react-router-dom";

export default function Navbar(){
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
        <NavLink to="/" className="navbar-brand ms-3">
          MERN CRUD app
        </NavLink>
        <div className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink to={"/books"} className="nav-link">
              All Books
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/add"} className="nav-link">
              Add a Book
            </NavLink>
          </li>
        </div>
      </nav>
        
    )
}