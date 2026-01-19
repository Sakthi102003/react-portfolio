import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Skills />
      <Certificates />
      <Projects />
      <Contact />
      <footer className="footer">
        © 2025 Srinithi NV · Portfolio
      </footer>
    </div>
  );
}

export default App;
