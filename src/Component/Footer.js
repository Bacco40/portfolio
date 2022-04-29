import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import {faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons';
library.add(faEnvelope, faLinkedin, faGithub);

function Footer() {
  return (
    <footer className="footerSection">
        <div className="footerContainer">
            <a href="mailto:bacchettimatteo@gmail.com" className="bottomBtn"><FontAwesomeIcon icon="fa-regular fa-envelope" /></a>
            <a className="bottomBtn" href="https://www.linkedin.com/in/matteo-bacchetti-38b2ba159" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon="fa-brands fa-linkedin" />
            </a>
            <a className="bottomBtn" href="https://github.com/Bacco40" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon="fa-brands fa-github" />
            </a>
        </div>
    </footer>
  );
}

export default Footer;