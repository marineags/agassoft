import "./Navbar.css";


function Navbar() {
  return (
    <div className="navbar">
     <div className="logo">
      <h1>AGAS<span>SOFT</span></h1>
      </div>
      <div className="navbar accueil">
        <a href="/">Accueil</a>
      </div>
      <div className="navbar a-propos">
        <a href="/a propos">À propos</a>
      </div>
      <div className="navbar portfolio">
        <a href="/portfolio">Portfolio</a>
      </div>
      <div className="navbar tarif">
        <a href="/tarif">Tarif</a>
      </div>
      <div className="navbar services">
        <a href="/services">Services</a>
      </div>
       <div className="navbar faq">
        <a href="/faq">FAQ</a>
      </div>
      <div className="navbar parler-de-mon-projets">
        <a href="/parler-de-mon-projets">Parler de mon projet</a>
      </div>
     

    </div>
  );
}

export default Navbar;