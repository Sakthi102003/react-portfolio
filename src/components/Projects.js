import { motion } from "framer-motion";

const projects = [
  {
    title: "Feedback Sentiment Tracker",
    desc: "A full-stack Java application that performs automated sentiment analysis on user feedback, stores records in MySQL, and visualizes data through an interactive dashboard.",
    link: "https://github.com/Srinithinv/FeedbackSentimentTracker",
    tags: ["Java", "MySQL", "JavaScript", "Chart.js"]
  },
  {
    title: "Mini Search Engine",
    desc: "A system-level C implementation of a search engine using Inverted Index, Hash Tables, and Linked Lists for fast document searching and ranking.",
    link: "https://github.com/Srinithinv/Mini-Search-Engine-DSA-C",
    tags: ["C", "DSA", "System Programming"]
  },
  {
    title: "SmartMart Dashboard",
    desc: "A full-stack e-commerce admin dashboard built with React and Spring Boot, managing orders and sales data with real-time visualizations.",
    link: "https://github.com/Srinithinv/smartmart-dashboard",
    tags: ["React", "Spring Boot", "REST API"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -12 }}
          >
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              {p.tags?.map((tag, index) => (
                <span key={index} style={{ fontSize: '0.75rem', background: 'var(--primary-light)', opacity: '0.8', color: 'var(--secondary)', padding: '0.25rem 0.6rem', borderRadius: '4px', fontWeight: 'bold' }}>
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              View Repository
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
