import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <a href="#home" className="logo">Srinithi's Space</a>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#skills">Skills</a>
        <a href="#dashboards">Dashboards</a>
        <a href="#certificates">Certificates</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </motion.nav>
  );
}
