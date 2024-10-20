import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "JavaScript",
    "HTML5",
    "CSS",
    "SASS",
    "SQL",
    "Unity"
];

const labelsSecond = [
    "Adobe After Effects",
    "Adobe Illustrator",
    "Adobe Lightroom",
    "Adobe Photoshop",
    "Figma",
];

const labelsThird = [
    "DaVinci Resolve",
    "Sony Vegas",
    "OBS",
    "Max",
    "TouchDesigner",
    "Reaper",
    "Autodesk Maya",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Compétences</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Codage et programmation</h3>
                    <p>Mes expériences en codant des sites web et des jeux ont développé mes compétences en design et développement web ainsi que ma créativité et ma capacité à résoudre des problèmes.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Compétences:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Désign</h3>
                    <p>J'utilise des outils de la suite Adobe Creative Suite pour créer mes projets axés sur le design créatif et Figma pour planifier le design de mes sites ainsi que pour mes plans d'inspirations.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Compétences:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Audio et video</h3>
                    <p>DaVinci Resolve et Sony Vegas sont utilisées pour le montage vidéo et Reaper pour l'édition audio. J'utilise aussi Max et TouchDesigner pour des projets interactifs, ainsi que Maya pour les éléments 3D dans mes créations.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Compétences:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;