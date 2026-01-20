import { motion } from "framer-motion";

const certs = [
  {
    title: "Foundations: Data, Data, Everywhere",
    issuer: "Coursera",
    link: "https://coursera.org/verify/HTR1U49SQOVY "
  },
  {
    title: "Ask Questions to Make Data-Driven Decisions",
    issuer: "Coursera",
    link: "https://coursera.org/verify/793BRT6ELDAH "
  },
  {
    title: "Prepare Data for Exploration",
    issuer: "Coursera",
    link: "https://coursera.org/verify/3TMIZOF8BDZQ "
  },
  {
    title: "Process Data from Dirty to Clean",
    issuer: "Coursera",
    link: "https://coursera.org/verify/NJNKWK4IF2S8 "
  },
  {
    title: "Business Intelligence (BI) Essentials",
    issuer: "Coursera",
    link: "https://coursera.org/verify/IL8M51H9BVWB "
  }
];

export default function Certificates() {
  return (
    <section id="certificates" className="section">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Professional Certifications
      </motion.h2>

      <div className="cert-grid">
        {certs.map((c, i) => (
          <motion.div
            key={i}
            className="cert-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -10, borderColor: 'var(--primary)' }}
          >
            <p style={{ color: 'var(--primary)', fontWeight: 'bold', fontSize: '0.8rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
              {c.issuer}
            </p>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', lineHeight: '1.4' }}>{c.title}</h3>

            <a
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-btn"
            >
              Verify Credential
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
