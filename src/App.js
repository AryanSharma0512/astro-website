import './styles/CSS/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import HomePage from './components/HomePage';
import Affiliations from './components/Affiliations';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from './config/particlesConfig';
import Loader from './components/Loader';
import { useEffect, useState } from 'react';

function App() {

  const [loading, setLoading] = useState(false);

  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, [])
  
  return (
    <>
    <Particles height="100vh" width="100vw" init={particlesInit} options={particlesConfig} />
    {loading ? <Loader/> : 
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>        
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/affiliations" element={<Affiliations />} />
      </Routes>
    </BrowserRouter>}
    </>
  );
}

export default App;
