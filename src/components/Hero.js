import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="tag">Hello, I’m</p>
        <h1>
          <span>Srinithi</span> NV
        </h1>

        <p className="sub">
          A motivated fresher with hands-on experience in UI/UX design and a strong
          interest in data analytics and software development. I enjoy working with
          datasets, creating user-friendly interfaces, and continuously learning new
          technologies to build a successful career in tech.
        </p>

        <div className="hero-buttons">
          <a href="#skills" className="btn primary">Explore Skills</a>
          <a href="#certificates" className="btn ghost">View Certificates</a>
        </div>
      </motion.div>

      {/* TECH STACK BOX */}
      <motion.div
        className="hero-box"
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        <p>🎨 UI/UX Design</p>
        <p>💻 Frontend Development</p>
        <p>📊 Data Analytics</p>
      </motion.div>
    </section>
  );
}
