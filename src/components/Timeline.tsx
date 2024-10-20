import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

function aPropos() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>À propos</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida dapibus neque. Donec nunc nibh, tincidunt sit amet magna a, vehicula porta lectus. Suspendisse sodales leo ut ante iaculis, et molestie nunc sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris et dui blandit, pretium velit a, sagittis neque. Pellentesque cursus urna vitae libero fermentum, ac dapibus tellus iaculis. Phasellus ac est ac risus placerat laoreet.</p>
      </div>
    </div>
  );
}


export default aPropos;