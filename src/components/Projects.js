const projects = [
  {
    title: "Feedback Sentiment Tracker",
    desc: "Feedback & Sentiment Tracker is a full-stack Java mini project that allows users to submit feedback, performs automated sentiment analysis, stores records in a MySQL database using JDBC, and visualizes sentiment distribution through an interactive analytics dashboard built with HTML, CSS, JavaScript, and Chart.js.",
    link: "https://github.com/Srinithinv/FeedbackSentimentTracker"
  },
  {
    title: "Mini Search Engine (DSA in C)",
    desc: "Built a mini search engine using C that implements an Inverted Index with Hash Tables and Linked Lists to enable fast keyword-based document search across multiple text files. The project integrates backend logic with a web interface using CGI and features a modern, animated UI for better user experience. It supports document ranking based on keyword frequency and demonstrates strong fundamentals in Data Structures and System-level programming.",
    link: "https://github.com/Srinithinv/Mini-Search-Engine-DSA-C/tree/a7c5f5e601f5cf09f5fde721d3c65ccfc39239b8"
  },
  {
    title: "SmartMart Dashboard",
    desc: `SmartMart Pro is a full-stack e-commerce admin dashboard developed using React.js for the frontend and Java (Spring Boot) for backend APIs.
The system manages orders, customers, and sales data with interactive dashboards and charts.
REST APIs are used to fetch and update data, and session-based authentication is implemented for secure access.`,
    link: "https://github.com/Srinithinv/smartmart-dashboard"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>

            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
