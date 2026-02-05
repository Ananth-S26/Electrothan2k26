import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "../styles/layout.css";
import "../styles/loader.css"; // make sure this exists

export default function Layout({ children }) {
  const [loading, setLoading] = useState(true);

  // Hide loader after 2.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-wrapper">
      {/* LOADING SCREEN */}
      {loading && (
        <div className="loader-wrapper">
          <div className="loader-text">
            Association of <span className="highlight">EEE</span> presents
          </div>
        </div>
      )}

      {/* MAIN CONTENT */}
      {!loading && (
        <>
          {/* INTERACTIVE TECH CIRCUIT BACKGROUND */}
          <div className="interactive-bg">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* DARK OVERLAY */}
          <div className="global-overlay" />

          {/* NAVBAR */}
          <Navbar />

          {/* PAGE CONTENT */}
          <div className="page-content">{children}</div>
        </>
      )}
    </div>
  );
}
