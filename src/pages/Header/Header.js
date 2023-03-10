import React from "react";

export default function Header() {
  return (
    <header id="header" className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/home">Naukri</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/tools">Tools</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}