import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "../styles/layout.css";
import "../styles/loader.css";
import Footer from "./Footer";

export default function Layout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-wrapper">
      {/* LOADER */}
      {loading && (
        <div className="loader-wrapper">
          <div className="loader-glow"></div>
          <div className="loader-text">
            Association of <span>EEE</span>
            <small>presents</small>
          </div>
        </div>
      )}

      {!loading && (
        <>
          {/* TECH BACKGROUND */}
          <div className="interactive-bg">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="interactive-bg network-bg">
  {Array.from({ length: 18 }).map((_, i) => (
    <span key={i}></span>
  ))}
</div>

          {/* OVERLAY */}
        

          {/* NAV */}
          <Navbar />

          {/* CONTENT */}
          <div className="page-content">{children}</div>
          <Footer />
        </>
      )}
    </div>
    
  );
}
