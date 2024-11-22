import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faFigma} from '@fortawesome/free-brands-svg-icons';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "HTML5",
    "JavaScript",
    "Vue",
    "React",
    "CSS",
    "SASS",
    "SQL",
    "Wordpress",
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
                    <FontAwesomeIcon icon={faJs} size="3x"/>
                    <h3>Codage et programmation</h3>
                    <p>Mes expériences en <span className="text-color">codant des sites web</span> et des <span className="text-color">jeux</span> ont développé mes compétences en design et développement web ainsi que ma créativité et ma capacité à résoudre des problèmes.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Compétences:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faFigma} size="3x"/>
                    <h3>Design</h3>
                    <p>J'utilise des outils de la suite <span className="text-color">Adobe Creative Cloud</span> pour créer mes projets axés sur le design créatif et <span className="text-color">Figma</span> pour planifier le design de mes sites ainsi que pour mes plans d'inspirations.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Compétences:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faFilm} size="3x"/>
                    <h3>Audio et vidéo</h3>
                    <p> <span className="text-color">DaVinci Resolve</span> et <span className="text-color">Sony Vegas</span> sont utilisées pour le montage vidéo et <span className="text-color">Reaper</span> pour l'édition audio. J'utilise aussi <span className="text-color">Max</span> et <span className="text-color">TouchDesigner</span> pour des projets interactifs, ainsi que <span className="text-color">Maya</span> pour les éléments 3D dans mes créations.</p>
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