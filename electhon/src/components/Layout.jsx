import Navbar from "./Navbar";
import "../styles/layout.css";

export default function Layout({ children }) {
  return (
    <div className="app-wrapper">
      {/* VIDEO BACKGROUND */}
      <video
        className="global-video"
        src="/bg.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* DARK OVERLAY */}
      <div className="global-overlay" />

      {/* NAVBAR */}
      <Navbar />

      {/* PAGE CONTENT */}
      <div className="page-content">
        {children}
      </div>
    </div>
  );
}
