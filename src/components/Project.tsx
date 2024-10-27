import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projets</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://ihabmjr.github.io/Carry-on-Carrion/" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://ihabmjr.github.io/Carry-on-Carrion/" target="_blank" rel="noreferrer"><h2>Carry on, Carrion</h2></a>
                <p>Un jeu de rôle qui se déroule dans un monde fantastique sombre développé en JavaScript. Des mises à jour sont effectuées pour rendre l'histoire plus immersive.</p>
            </div>
            <div className="project">
                <a href="https://ihabmjr.github.io/erick-ihab-app-festival-art/" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://ihabmjr.github.io/erick-ihab-app-festival-art/" target="_blank" rel="noreferrer"><h2>Japan Media Arts Festival</h2></a>
                <p>Projet collaboratif avec Érick Ouellette : révision du site et de l'application du "Japan Media Arts Festival" selon notre vision. J'ai développé le site web, et Érick Ouellette s'est chargé de l'application.</p>
            </div>
            <div className="project">
                <a href="https://1drv.ms/p/c/28b7601e5ee57c99/EbdV5Ji0q2JMoaLj9Ih9BKEBEHkkwMsOHl0jqDiQjVD6rg?e=x9A0Ta" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://1drv.ms/p/c/28b7601e5ee57c99/EbdV5Ji0q2JMoaLj9Ih9BKEBEHkkwMsOHl0jqDiQjVD6rg?e=x9A0Ta" target="_blank" rel="noreferrer"><h2>Portrait Photoshop</h2></a>
                <p>Un projet réalisé sur Photoshop qui présente mes passions et mes loisirs dans un style bricolage.</p>
            </div>
            <div className="project">
                <a href="https://1drv.ms/p/c/28b7601e5ee57c99/EeV6eNKiBfhAu2fkwrUB4a0BwMJhPsnDqmliIyjJhavlPg?e=5VES2A" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://1drv.ms/p/c/28b7601e5ee57c99/EeV6eNKiBfhAu2fkwrUB4a0BwMJhPsnDqmliIyjJhavlPg?e=5VES2A" target="_blank" rel="noreferrer"><h2>Animation 3D avec audio immersif</h2></a>
                <p>"Promenade" est une animation 3D développée sur Autodesk Maya en collaboration avec Michaël Un Dupré. J'ai réalisé l'audio avec Reaper, et le montage final a été effectué sur DaVinci Resolve.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;