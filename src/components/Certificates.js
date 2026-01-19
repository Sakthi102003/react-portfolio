const certs = [
  {
    title: "Foundations: Data, Data, Everywhere",
    link: "https://coursera.org/verify/HTR1U49SQOVY "
  },
  {
    title: "Ask Questions to Make Data-Driven Decisions",
    link: "https://coursera.org/verify/793BRT6ELDAH "
  },
  {
    title: "Prepare Data for Exploration",
    link: "https://coursera.org/verify/3TMIZOF8BDZQ "
  },
  {
    title: "Process Data from Dirty to Clean",
    link: "https://coursera.org/verify/NJNKWK4IF2S8 "
  },
  {
    title: "Business Intelligence (BI) Essentials",
    link: "https://coursera.org/verify/IL8M51H9BVWB "
  }
];

export default function Certificates() {
  return (
    <section id="certificates" className="section">
      <h2>Certifications</h2>

      <div className="cert-grid">
        {certs.map((c, i) => (
          <div key={i} className="cert-card">
            <h4>{c.title}</h4>

            <a
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-btn"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
