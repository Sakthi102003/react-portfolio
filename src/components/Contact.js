import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <motion.div
        className="contact"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Let's Connect</h2>
        <p className="sub">Currently looking for new opportunities and collaborations. Feel free to reach out!</p>

        <div className="contact-info">
          <a href="mailto:srinithinv@gmail.com" className="contact-item">
            📧 srinithinv@gmail.com
          </a>
          <a href="tel:+919080319955" className="contact-item">
            📞 +91 90803 19955
          </a>
          <div className="contact-item" style={{ cursor: 'default' }}>
            📍 Tamil Nadu, India
          </div>
        </div>

        <div style={{ marginTop: '2rem', padding: '1rem', borderTop: '1px solid var(--glass-border)' }}>
          <p style={{ fontWeight: '600', color: 'var(--primary)' }}>Available for Internships & Full-time Roles</p>
        </div>
      </motion.div>
    </section>
  );
}
