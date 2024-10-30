import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faDocker,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

function aPropos() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>À propos</h1>
        <p>
          Étudiant en intégration multimédia, je suis passionné par l'interaction entre les divers logiciels de programmation et de design, et j'adore explorer différentes combinaisons d'outils pour créer des expériences uniques et immersives. Mon parcours m'a permis de développer des compétences en programmation tout en explorant les aspects artistiques du design numérique.
          <br />
          <br />
          Actuellement, je suis à la recherche d'un stage pour mettre en pratique mes compétences techniques et ma créativité dans des projets dans le domaine du web ou dans des projets interactifs, dans le but d'améliorer mes compétences et de progresser dans ma carrière.
        </p>
      </div>
    </div>
  );
}

export default aPropos;
