import { useState } from "react";
import "../styles/navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <nav className="rdr-navbar">
      <div
        className="rdr-logo"
        onClick={() => scrollToSection("home")}
      >
        <img src="/eeegolden.png" alt="EEE Logo" height="50px" a onClick={() => scrollToSection("home")}  />
      </div>

      {/* Hamburger */}
      <div
        className={`hamburger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Links */}
      <div className={`nav-links ${open ? "show" : ""}`}>
        <a onClick={() => scrollToSection("home")}>Home</a>
        <a onClick={() => scrollToSection("about")}>About</a>
        <a onClick={() => scrollToSection("problems")}>Problems</a>
        <a onClick={() => scrollToSection("register")}>Register</a>
        <a onClick={() => scrollToSection("contact")}>Contact</a>
      </div>
    </nav>
  );
}
