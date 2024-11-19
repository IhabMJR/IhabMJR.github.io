import React from "react";
import "@fortawesome/free-regular-svg-icons";
import "../assets/styles/Expertise.scss";

function aPropos() {
  return (
    <div id="aPropos" className="a-propos-container">
        <h1>À propos</h1>
        <p>
          Étudiant en intégration multimédia, <span className="text-color">je suis passionné par l'interaction entre les divers logiciels de programmation et de design</span>, et j'adore explorer différentes combinaisons d'outils pour créer des expériences uniques et immersives. Mon parcours m'a permis de développer des compétences en programmation tout en explorant les aspects artistiques du design numérique.
          <br />
          <br />
          Actuellement, je suis <span className="text-color">à la recherche d'un stage</span> pour mettre en pratique mes compétences techniques et ma créativité dans des projets <span className="text-color">dans le domaine du web</span> ou dans des projets interactifs, dans le but d'améliorer mes compétences et de progresser dans ma carrière.
        </p>
      </div>
  );
}

export default aPropos;
