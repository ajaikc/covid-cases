import React from "react";
import { Col, Row } from "reactstrap";
import './module.css'
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">One View</a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Services
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Resources</a>
          </li>
          <li className="nav-item">
            <a className="nav-link ml-1 me-1" href="#" style={{border:"1px solid black"}}>Login</a>
          </li>
          <li className="nav-item">
            <a className="btn btn-custom" href="#">Start your free trial</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Nav;
