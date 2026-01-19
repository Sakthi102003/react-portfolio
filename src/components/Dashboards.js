// src/components/Dashboards.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const dashboards = [
  {
    title: 'Customer Purchase Dashboard',
    preview: 'https://learn.microsoft.com/en-us/power-bi/media/service-sample-datasets/retail-analysis-sample-dashboard.png',
    embed: 'https://app.powerbi.com/view?r=eyJrIjoiZGUzZThlZjQtMTRlYy00MzRkLWE3NTItZjM0MWI0MzJlYTRlIiwidCI6IjU4ZTE0YzM0LTIxYmItNDIxZi04MzE3LWJmNzFkMjRiYWJlYiJ9',
    desc: 'Power BI dashboard analyzing customer segments and purchase patterns across multiple stores.',
  },
  {
    title: 'Sales Performance Overview',
    preview: 'https://learn.microsoft.com/en-us/power-bi/media/service-sample-datasets/sales-performance-dashboard.png',
    embed: 'https://app.powerbi.com/view?r=eyJrIjoiMmRkNDY2NzctOGZlZS00YWRiLTkxMzYtZmZiYmRmNzQxZGE5IiwidCI6IjU4ZTE0YzM0LTIxYmItNDIxZi04MzE3LWJmNzFkMjRiYWJlYiJ9',
    desc: 'A KPI dashboard that visualizes revenue, profit, and sales performance by region and time.',
  },
  {
    title: 'Weather Data Trends',
    preview: 'https://public.tableau.com/static/images/We/WeatherTrendsDashboard/Dashboard1/1.png',
    embed: 'https://public.tableau.com/views/WeatherTrendsDashboard/Dashboard1?:showVizHome=no&:embed=true',
    desc: 'Tableau dashboard showing temperature, humidity, and rainfall variations by month.',
  },
];

export default function Dashboards() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="dashboards" className="section dashboards-section">
      <h2>Interactive Dashboards</h2>
      <p className="section-sub">
        Explore sample dashboards created with Power BI and Tableau — for visualizing sales, customer, and weather data.
      </p>

      <div className="dashboards-grid">
        {dashboards.map((dash, index) => (
          <motion.div
            key={index}
            className="dashboard-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelected(dash)}
          >
            <img src={dash.preview} alt={dash.title} />
            <h3>{dash.title}</h3>
            <p>{dash.desc}</p>
          </motion.div>
        ))}
      </div>

      {selected && (
        <div className="popup-overlay" onClick={() => setSelected(null)}>
          <motion.div
            className="popup-dashboard"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3>{selected.title}</h3>
            <iframe
              src={selected.embed}
              width="100%"
              height="500"
              title={selected.title}
              style={{ border: 'none', borderRadius: '10px' }}
              allowFullScreen
            ></iframe>
            <p>{selected.desc}</p>
            <button onClick={() => setSelected(null)}>Close</button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
