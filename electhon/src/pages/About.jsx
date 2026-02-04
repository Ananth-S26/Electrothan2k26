import PageWrapper from "../components/PageWrapper";
import "../styles/about.css";

export default function About() {
  return (
    <PageWrapper>
      <section className="about">
        {/* Background Video */}
        <video className="about-bg-video" autoPlay muted loop playsInline>
          <source src="/bg.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        

        {/* Content */}
        <div className="about-content">
          <h2>About the Hackathon</h2>

          <div className="about-grid">
            <div className="about-card">
              <h3>About SustainX</h3>
              <p>
                SustainX is a national-level hackathon blending sustainability,
                electrical innovation, and software survival.
              </p>
            </div>

            <div className="about-card">
              <h3>Organised By</h3>
              <p>
                Association of Electrical and Electronics Engineering (EEE)
              </p>
            </div>

            <div className="about-card">
              <h3>Hackathon Format</h3>
              <p>
                A 24-hour continuous hackathon featuring both hardware and
                software-based problem statements.
              </p>
            </div>

            <div className="about-card">
              <h3>Date & Duration</h3>
              <p>
                18th & 19th February<br />
                24 Hours of Innovation
              </p>
            </div>

            <div className="about-card ">
              <h3>Cash Prizes</h3>
              <p>
                Exciting cash prizes await the top-performing teams.
              </p>
            </div>

            <div className="about-card">
              <h3>Sponsors</h3>
              <p>
                Datacorp<br />
                TurnOn<br />
                Zeon Electric
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
