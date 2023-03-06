import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/HomePage.jsx";
import Experience from "./pages/experience/Experience.jsx";
import Navbar from "./pagecomponents/navbar/Navbar.jsx";
import Footer from "./pagecomponents/footer/Footer.jsx";
import ProjectDisplay from "./pages/projectdisplay/ProjectDisplay.jsx";
import Projects from "./pages/projects/Projects.jsx";

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
