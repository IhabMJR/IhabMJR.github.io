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
                <p>Un jeu de rôle qui se déroule dans un monde fantastique sombre développé en <span className="text-color">JavaScript</span>. Des mises à jour sont effectuées pour rendre l'histoire plus immersive.</p>
            </div>
            <div className="project">
                <a href="https://ihabmjr.github.io/erick-ihab-app-festival-art/" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://ihabmjr.github.io/erick-ihab-app-festival-art/" target="_blank" rel="noreferrer"><h2>Japan Media Arts Festival</h2></a>
                <p> <span className="text-color">Projet collaboratif</span> avec Érick Ouellette: révision du site du "Japan Media Arts Festival". J'ai développé le site web avec <span className="text-color">Bootstrap 5</span>, Érick Ouellette s'est chargé de l'application.</p>
            </div>
            <div className="project">
                <a href="https://1drv.ms/p/c/28b7601e5ee57c99/EbdV5Ji0q2JMoaLj9Ih9BKEBEHkkwMsOHl0jqDiQjVD6rg?e=x9A0Ta" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://1drv.ms/p/c/28b7601e5ee57c99/EbdV5Ji0q2JMoaLj9Ih9BKEBEHkkwMsOHl0jqDiQjVD6rg?e=x9A0Ta" target="_blank" rel="noreferrer"><h2>Portrait Photoshop</h2></a>
                <p>Un projet réalisé sur <span className="text-color">Photoshop</span> qui présente mes passions et mes loisirs dans un style bricolage.</p>
            </div>
            <div className="project">
                <a href="https://youtu.be/QXEo8DbLNnk" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://youtu.be/QXEo8DbLNnk" target="_blank" rel="noreferrer"><h2>Animation 3D avec audio immersif</h2></a>
                <p>"Promenade" est une animation 3D développée sur Autodesk Maya en <span className="text-color">collaboration</span> avec Michaël Un Dupré. J'ai réalisé l'audio avec <span className="text-color">Reaper</span>, et le montage final a été effectué sur <span className="text-color">DaVinci Resolve</span>.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;