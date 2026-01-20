import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Briefcase } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants}>
          I'm <span>Srinithi NV</span>
        </motion.h1>

        <motion.h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontWeight: '600', color: 'var(--text-main)' }} variants={itemVariants}>
          Full Stack Developer & Data Enthusiast
        </motion.h2>

        <motion.p className="sub" variants={itemVariants}>
          I bridge the gap between design and code, building <strong>precision-driven digital experiences</strong>.
          With a strong foundation in UI/UX design and a passion for data analytics,
          I specialize in creating user-centric applications that are as functional as they are beautiful.
        </motion.p>

        <motion.div className="availability-badge" variants={itemVariants}>
          <Briefcase size={16} />
          <span>Actively seeking Internships & Full-time opportunities</span>
        </motion.div>

        <motion.div className="social-links" variants={itemVariants}>
          <a href="https://github.com/Srinithinv" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={22} />
          </a>
          <a href="https://www.linkedin.com/in/srinithi-nv/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={22} />
          </a>
          <a href="mailto:srinithinv@gmail.com" aria-label="Email">
            <Mail size={22} />
          </a>
          <a href="tel:9080319955" aria-label="Call">
            <Phone size={22} />
          </a>
        </motion.div>

        <motion.div className="hero-buttons" variants={itemVariants}>
          <a href="#projects" className="btn primary">View My Projects</a>
          <a href="#certificates" className="btn ghost">Technical Credentials</a>
        </motion.div>
      </motion.div>
    </section>
  );
}
