import { useEffect } from "react";
import "../styles/loader.css";

export default function Loader({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2600);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="loader-wrapper">
      {/* Glow rings */}
      <div className="loader-ring"></div>
      <div className="loader-ring delay"></div>

      {/* Floating particles */}
      <div className="loader-particles">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i}></span>
        ))}
      </div>

      {/* Text */}
      <div className="loader-text">
        Association of <span className="highlight">EEE</span>
        <small><br></br>presents</small>
      </div>
    </div>
  );
}
