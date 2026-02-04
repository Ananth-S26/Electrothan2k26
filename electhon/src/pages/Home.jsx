import PageWrapper from "../components/PageWrapper";
import "../styles/home.css";

export default function Home() {
  return (
    <PageWrapper>
      <section className="home-hero">

        <video
          className="bg-video"
          src="/bg.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="bg-overlay" />

        <div className="hero-content">
          <h1>
            ELECTROTHAN <span>2K26</span>
          </h1>
          <p>Survive • Innovate • Engineer the Future</p>
          <button className="hero-btn">ENTER THE EVENT</button>
        </div>

      </section>
    </PageWrapper>
  );
}
