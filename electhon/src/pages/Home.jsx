import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import "../styles/home.css";

export default function Home() {
  const navigate = useNavigate(); // Hook for navigation

  // 🔥 SET YOUR EVENT DATE HERE
  const eventDate = new Date("2026-02-18T09:00:00"); // YYYY-MM-DDTHH:MM:SS

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = eventDate - now;

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({});
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleEnterEvent = () => {
    navigate("/register"); // Redirect to Register page
  };

  return (
    <PageWrapper>
      <section className="home-hero">
        <div className="hero-content">
          <h1>
            ELECTROTHON <span>2K26</span>
          </h1>

          <p>Survive • Innovate • Engineer the Future</p>

          {/* ⏳ COUNTDOWN TIMER */}
          <div className="countdown">
            {Object.keys(timeLeft).length > 0 ? (
              <>
                <div>
                  <span>{timeLeft.days}</span>
                  <small>DAYS</small>
                </div>
                <div>
                  <span>{timeLeft.hours}</span>
                  <small>HOURS</small>
                </div>
                <div>
                  <span>{timeLeft.minutes}</span>
                  <small>MIN</small>
                </div>
                <div>
                  <span>{timeLeft.seconds}</span>
                  <small>SEC</small>
                </div>
              </>
            ) : (
              <h3>🔥 EVENT LIVE NOW 🔥</h3>
            )}
          </div>

          {/* ✅ Button navigates to Register page */}
          <button className="hero-btn" onClick={handleEnterEvent}>
            ENTER THE EVENT
          </button>
        </div>
      </section>
    </PageWrapper>
  );
}
