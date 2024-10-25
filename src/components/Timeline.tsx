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
          En tant qu'étudiant en intégration multimédia, je suis passionné par l'interaction entre la complexité technique du code et la richesse des logiciels créatifs.
          Mon parcours m'a offert l'opportunité d'acquérir plusieurs compétences en programmation tout en me familiarisant avec les aspects artistiques du design numérique.
          <br />
          <br />
          Actuellement, à la recherche d'un stage pour mettre en pratique mes compétences techniques et ma créativité dans divers projets, dans le but d'améliorer mes compétences et de progresser dans ma carrière.
        </p>
      </div>
    </div>
  );
}

export default aPropos;
