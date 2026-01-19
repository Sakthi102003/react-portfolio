export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills & Tools</h2>

      <div className="skills-grid">

        <div className="skill-card">
          <h3>Data Analysis</h3>
          <ol>
            <li>Excel & Google Sheets</li>
            <li>Data Cleaning</li>
            <li>Basic Statistics</li>
            <li>Data Visualization</li>
            <li>Dashboard Concepts</li>
          </ol>
        </div>

        <div className="skill-card">
          <h3>Frontend Development</h3>
          <ol>
            <li>HTML & CSS</li>
            <li>JavaScript Basics</li>
            <li>React Fundamentals</li>
          </ol>
        </div>

        <div className="skill-card">
          <h3>Backend Development</h3>
          <ol>
            <li>Java (OOP Concepts)</li>
            <li>Python (Basics)</li>
          </ol>
        </div>

        <div className="skill-card">
          <h3>Tools & Platforms</h3>
          <ol>
            <li>Power BI (Learning)</li>
            <li>MySQL</li>
            <li>BigQuery</li>
            <li>VS Code</li>
            <li>GitHub</li>
          </ol>
        </div>

      </div>
    </section>
  );
}
