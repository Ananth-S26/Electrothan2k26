import PageWrapper from "../components/PageWrapper";
import "../styles/contact.css";

export default function Contact() {
  return (
    <PageWrapper>
      <section className="contact">
       

        {/* Overlay */}
        

        <div className="contact-content">
          <h2>Contact</h2>

          <div className="contact-grid">
            {/* Coordinators Box */}
            {/* Coordinators Box */}
            <div className="contact-card">
            <h3>COORDINATORS</h3>
            <p
            className="copy-row"
            onClick={() => navigator.clipboard.writeText("8754277997")}
            >
            <span className="name">Kiran Karthek S</span>
            <span className="hover-msg">Click to copy</span>
            <span className="number">8754277997</span>
            </p>

            <p
            className="copy-row"
            onClick={() => navigator.clipboard.writeText("8098654044")}
            >
            <span className="name">Deepak Narayan M</span>
            <span className="hover-msg">Click to copy</span>
            <span className="number">8098654044</span>
            </p>

            <p
            className="copy-row"
            onClick={() => navigator.clipboard.writeText("9159818845")}
            >
            <span className="name">Sowndhar R</span>
            <span className="hover-msg">Click to copy</span>
            <span className="number">9159818845</span>
            </p>

            </div>

            {/* Email & Insta Box */}
            <div className="contact-card">
              <h3>CONNECT WITH US</h3>

              <p>
                <strong>Email</strong>
                <span>eeeasssociation@gmail.com</span>
              </p>

              <p>
                <strong>Instagram</strong>
                <span>eeeassociationinsta</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
