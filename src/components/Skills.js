import { motion } from "framer-motion";
import {
  Palette, Code, BarChart, Cpu,
  Users, Layout, Layers, Lightbulb,
  MessageSquare, Clock, FileSpreadsheet, PieChart
} from "lucide-react";

export default function Skills() {
  const skills = [
    {
      category: "UI/UX Design",
      mainIcon: <Palette className="category-icon" />,
      items: [
        { name: "Figma", type: "brand", slug: "figma", color: "F24E1E" },
        { name: "User Research", type: "icon", icon: <Users size={28} color="#B76E79" /> },
        { name: "Wireframing", type: "icon", icon: <Layout size={28} color="#8C4F59" /> },
        { name: "Prototyping", type: "icon", icon: <Layers size={28} color="#630d16" /> },
      ],
    },
    {
      category: "Frontend Development",
      mainIcon: <Code className="category-icon" />,
      items: [
        { name: "HTML & CSS", type: "brand", slug: "html5", color: "E34F26" },
        { name: "JavaScript", type: "brand", slug: "javascript", color: "F7DF1E" },
        { name: "React.js", type: "brand", slug: "react", color: "61DAFB" },
        { name: "Tailwind CSS", type: "brand", slug: "tailwindcss", color: "06B6D4" },
      ],
    },
    {
      category: "Data Analytics",
      mainIcon: <BarChart className="category-icon" />,
      items: [
        { name: "SQL", type: "brand", slug: "mysql", color: "4479A1" },
        { name: "Excel", type: "icon", icon: <FileSpreadsheet size={28} color="#1D6F42" /> },
        { name: "Tableau", type: "icon", icon: <PieChart size={28} color="#E97627" /> },
        { name: "Python", type: "brand", slug: "python", color: "3776AB" },
      ],
    },
    {
      category: "Core Skills",
      mainIcon: <Cpu className="category-icon" />,
      items: [
        { name: "Problem Solving", type: "icon", icon: <Lightbulb size={28} color="#B76E79" /> },
        { name: "Teamwork", type: "icon", icon: <Users size={28} color="#8C4F59" /> },
        { name: "Communication", type: "icon", icon: <MessageSquare size={28} color="#630d16" /> },
        { name: "Time Management", type: "icon", icon: <Clock size={28} color="#B76E79" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-header"
      >
        <div className="title-with-icon">
          <Cpu size={40} className="header-icon" />
          <h2>Technical Expertise</h2>
        </div>
        <p className="section-sub">A comprehensive overview of my technical stack and tools.</p>
      </motion.div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className="card-header">
              {skill.mainIcon}
              <h3>{skill.category}</h3>
            </div>

            <div className="skills-items-grid">
              {skill.items.map((item, i) => (
                <div key={i} className="skill-item">
                  <div className="skill-icon-wrapper">
                    {item.type === "brand" ? (
                      <img
                        src={`https://cdn.simpleicons.org/${item.slug}/${item.color}`}
                        alt={item.name}
                        className="brand-icon"
                      />
                    ) : (
                      item.icon
                    )}
                  </div>
                  <span className="skill-name">{item.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
