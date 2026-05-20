import { Routes, Route } from "react-router-dom";
import './index.css'


import Hero from "./components/Hero/Hero";
import APropos from "./components/APropos/APropos";
import Portfolio from "./components/Portfolio/Portfolio";
import Tarif from "./components/Tarif/Tarif";
import Service from "./components/Service/Service";
import Projet from "./components/Projet/Projet";
import Faq from "./components/Faq/Faq";


import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="a propos" element={<APropos />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="tarif" element={<Tarif />} />
        <Route path="services" element={<Service />} />
        <Route path="parler-de-mon-projets" element={<Projet />} />
        <Route path="faq" element={<Faq />} />
      </Routes>
    </div>
  );
}

export default App;
