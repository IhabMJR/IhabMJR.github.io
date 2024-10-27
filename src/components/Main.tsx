import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import pfp from '../assets/images/pfp.jpg';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={pfp} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/IhabMJR" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ihab-mouhajer-89a3a7329/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Ihab Mouhajer</h1>
          <p>Bienvenue dans mon portfolio!</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/IhabMJR" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ihab-mouhajer-89a3a7329/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;