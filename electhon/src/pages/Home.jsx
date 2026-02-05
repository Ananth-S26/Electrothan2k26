import { useEffect, useState } from "react";
import PageWrapper from "../components/PageWrapper";
import About from "./About";
import Problems from "./Problems";
import Register from "./Register";
import Contact from "./Contact";
import "../styles/home.css";

export default function Home() {
  const eventDate = new Date("2026-02-18T09:00:00");
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

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <PageWrapper>

      {/* HERO */}
      <section className="home-hero" id="home">
        <div className="hero-content">
          <h1>
            ELECTROTHON <span>2K26</span>
          </h1>
          <p>Survive • Innovate • Engineer the Future</p>

          <div className="countdown">
            {Object.keys(timeLeft).length ? (
              <>
                <div><span>{timeLeft.days}</span><small>DAYS</small></div>
                <div><span>{timeLeft.hours}</span><small>HOURS</small></div>
                <div><span>{timeLeft.minutes}</span><small>MIN</small></div>
                <div><span>{timeLeft.seconds}</span><small>SEC</small></div>
              </>
            ) : (
              <h3>🔥 EVENT LIVE NOW 🔥</h3>
            )}
          </div>
              {/* PROBLEM TEASER */}
<div className="problem-teaser" onClick={() => scrollTo("problems")}>
  
  <p>
    ⚡ 6 Industry-Grade Problem Statements  
    <strong> Can you solve them?</strong>
  </p>
  
</div>
          <button className="hero-btn" onClick={() => scrollTo("register")}>
            ENTER THE EVENT
          </button>
        </div>
        
      </section>

      {/* ABOUT */}
      <section id="about">
        <About />
      </section>

      {/* PROBLEMS */}
      <section id="problems">
        <Problems />
      </section>

      {/* REGISTER */}
      <section id="register">
        <Register />
      </section>

      {/* CONTACT */}
      <section id="contact">
        <Contact />
      </section>

    </PageWrapper>
  );
}
