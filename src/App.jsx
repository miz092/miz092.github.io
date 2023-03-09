import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/HomePage.jsx";
import Experience from "./pages/experience/Experience.jsx";
import Navbar from "./pagecomponents/navbar/Navbar.jsx";
import Footer from "./pagecomponents/footer/Footer.jsx";
import ProjectDisplay from "./pages/projectdisplay/ProjectDisplay.jsx";
import Projects from "./pages/projects/Projects.jsx";
import Background from "./pagecomponents/Background/Background";
import About from "./pages/about/About";

function App() {
  return (
    <div className="App">
      <Background />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
