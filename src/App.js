import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import HomePage from './components/HomePage';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from './config/particlesConfig';

function App() {

  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  return (
    <BrowserRouter>
      <Particles height="100vh" width="100vw" init={particlesInit} options={particlesConfig} />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>        
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>    
    </BrowserRouter>
  );
}

export default App;
