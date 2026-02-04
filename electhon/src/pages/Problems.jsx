import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import "../styles/problems.css";

export default function Problems() {
  return (
    <PageWrapper>
      <section className="problems">
        
      <video
          className="bg-video"
          src="/bg.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <h2>Problem Statements</h2>
        

        <div className="problem-grid">
          <motion.div whileHover={{ scale: 1.05 }} className="problem-card">
            <h3>Hardware</h3>
            <p>Smart grids, renewable devices, energy harvesters.</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="problem-card">
            <h3>Software</h3>
            <p>Energy analytics, AI optimization, sustainability platforms.</p>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
