import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/HomePage.js";
import Experience from "./pages/experience/Experience.js";
import Navbar from "./pagecomponents/navbar/Navbar.js";
import Footer from "./pagecomponents/footer/Footer.js";
import ProjectDisplay from "./pages/projectdisplay/ProjectDisplay.js";
import Projects from "./pages/projects/Projects.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
