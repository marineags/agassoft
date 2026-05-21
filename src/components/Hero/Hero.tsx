import { useNavigate } from "react-router-dom";
import design from "../../assets/images/conception-graphique.png";
import propre from "../../assets/images/code.png";
import accompagner from "../../assets/images/accompagner.png";
import appareil from "../../assets/images/img-hero.png";
import "./Hero.css";
import Card from "./Card.tsx";
import portfolio from "../../assets/images/portfolio.png";
import boutique from "../../assets/images/magasin-de-vetements.png";
import landingPage from "../../assets/images/image.png";
import bricolage from "../../assets/images/bricolage.png";
import dessin from "../../assets/images/creation-de-sites-web.png";




function Hero() {

  const navigate = useNavigate();

  return (
    <section className="section-1">
      <div className="hero-content">

        <p className="hero-subtitle text ">
          DEVELOPPEMENT WEB SUR MESURE
        </p>

        <div className="hero-title">
        <h1>
          Donnez vie à vos <br/> <span>idées digitales</span>.
        </h1>
        </div>
        <p className="hero-description">
          Je conçois des sites web modernes, rapides et pensés
          pour vos besoins. <br/>Avec une attention particulière au
          design et à <br/>l’expérience utilisateur.
        </p>

        <div className="hero-buttons">
          <button className="button" onClick={() => navigate("/parler-de-mon-projets")}>Parler de mon projet</button>
          <button className="button" onClick={() => navigate("/portfolio")}>Voir mes réalisations</button>
        </div>
      

   <div className="hero-divider">
      <div className="hero-image">
        <img src={design} className="design " alt="Design moderne responsive" />
        <p>Design moderne<br/>et responsive</p>
      </div>
        <div className="hero-image">
        <img src={accompagner} className="accompagner" alt="Accompagnement personnalisé" />
        <p>Accompagnement<br/> personnalisé</p>
      </div>
      <div className="hero-image">
        <img src={propre} className="propre" alt="Code propre et maintenable" />
        <p>Code propre <br/>et maintenable</p>
      </div>
    
      </div>
</div>
      <img
        src={appareil}
        alt="Appareil mobile"
        className="hero-background-image"
      /> 
   
   
      <div className="services">
        <p className="text subtitle-2"> CE QUE JE VOUS PROPOSE </p>
        <h2 className="title-2">Des solutions adaptées à chaque besoin</h2>
        </div>

        <div className="cards-container">
        <Card image={boutique}
  title="Site Vitrine"
  description="Un site moderne pour présenter votre activité, vos services et donner envie de vous contacter."/>
            <Card image={portfolio}
  title="Portfolio"
  description="Une page personnalisée pour mettre en valeur vos projets, votre parcours et votre univers."/>
          <Card image={landingPage}
  title="Landing page"
  description="Une page claire et efficace pour présenter une offre, un événement ou un lancement."/>
          <Card image={bricolage}
  title="Refonte de site"
  description="Amélioration du design, de la structure et de l’expérience utilisateur d’un site existant."/>
          <Card image={dessin}
  title="Design responsive"
  description="Une interface adaptée aux mobiles, tablettes et ordinateurs pour une navigation fluide."/>
</div>

<button className="button-service"
onClick={() => navigate("/services")}>
Voir tous les services
</button>
    </section>
  );
}

export default Hero;