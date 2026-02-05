import { useEffect, useState } from "react";
import "../styles/loader.css";

export default function Loader({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // notify parent that loading is done
    }, 2500); // show loader for 2.5 seconds
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="loader-wrapper">
      <div className="loader-text">
        Association of <span className="highlight">EEE</span> presents
      </div>
    </div>
  );
}
