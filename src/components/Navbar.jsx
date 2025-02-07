import React, { useState, useEffect } from "react";
import { FaGithub, FaMoon, FaSun } from "react-icons/fa";

export default function Navbar({ brandName, githubLink, showSearchBar = true }) {
  const [darkMode, setDarkMode] = useState(getInitialTheme);

  useEffect(() => {
    applyTheme(darkMode);
  }, [darkMode]);

  function toggleTheme() {
    const newMode = !darkMode;
    setDarkMode(newMode);
    applyTheme(newMode);
  }

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}>
      <div className="container-fluid">
        <a className="navbar-brand fw-bold ms-2 text-gray" href="/">{brandName}</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/"><b>Home</b></a>
            </li>
          </ul>

          <div className="d-flex align-items-center flex-wrap">
            {/* Dark Mode Toggle Button */}
            <button
              onClick={toggleTheme}
              className="btn btn-outline-secondary d-flex align-items-center me-3"
              style={{ width: "40px", height: "40px", display: "flex", justifyContent: "center" }}
            >
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>

            {/* Search Bar */}
            {showSearchBar && <SearchBar darkMode={darkMode} />}

            {/* GitHub Button */}
            <GitHubButton githubLink={githubLink} darkMode={darkMode} />
          </div>
        </div>
      </div>
    </nav>
  );
}

/* Search Bar Component */
function SearchBar({ darkMode }) {
  return (
    <form className="d-flex flex-grow-1">
      <input
        className={`form-control me-2 ${darkMode ? "bg-dark text-white border-light" : "bg-light text-dark border-dark"}`}
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className={`btn ${darkMode ? "btn-outline-light" : "btn-outline-dark"}`} type="submit">
        Search
      </button>
    </form>
  );
}

/* GitHub Button Component */
function GitHubButton({ githubLink, darkMode }) {
  return (
    <a
      href={githubLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn d-flex align-items-center ms-3 ${darkMode ? "btn-outline-light" : "btn-outline-dark"}`}
      style={{ width: "45px", height: "45px", display: "flex", justifyContent: "center" }}
    >
      <FaGithub size={20} />
    </a>
  );
}

/* Dark Mode Persistence */
function getInitialTheme() {
  return localStorage.getItem("theme") === "dark";
}

function applyTheme(darkMode) {
  document.body.classList.toggle("bg-dark", darkMode);
  document.body.classList.toggle("text-white", darkMode);
  document.body.classList.toggle("bg-light", !darkMode);
  document.body.classList.toggle("text-dark", !darkMode);
  localStorage.setItem("theme", darkMode ? "dark" : "light");
}
