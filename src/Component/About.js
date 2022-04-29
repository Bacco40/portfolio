import React from "react";
import myPic from './myPic.jpg';
import 'devicon';

function About() {
  return (
    <section className="sectionTransition" >
        <h2 className="sectionTitle" id="about">01. About</h2>
        <div className="aboutContent">
            <div className="imageSection">
                <img src={myPic} className="myPic" alt="Matteo Bacchetti"/>
            </div>
            <div className="description">
                <p>Hi! Matteo Bacchetti here, i'm a self taught full-stack developer!</p>
                <p>Growing up i was always passionate by technologies, innovations and graphics in general,
                    that's why after an experience in London in a busy and stimulating environment in the wine sector,
                    i decided to follow my true passion and complete the Odin Project curriculum.</p>
                <p>In this curriculum i learned and worked with <em>React, Javascript(ES6+), HTML</em> and <em>CSS &nbsp;</em>for the
                front-end, <em>NodeJs, EXPRESS</em> and <em>Firebase</em> for the back-end, all of this to deliver great looking and performig website and App.</p>
                <p>I have a profound love for problem solving, which is at the root of why I enjoy programming so much! 
                    I thrive in environments that challenge me, and allow me to grow and develop my skills.</p>
                <p>Committed to the idea of life-long learning, I am ready to collaborate on new and exciting projects!</p>
            </div>
        </div>
        <div className="skills">
            <h3 className="info"> Skills in:</h3>
            <div className="skillsContainer">
                <div className="singleLogo">
                    <i className="devicon-react-original colored"></i> 
                    <p className="logoDescription">REACT</p>
                </div>
                <div className="singleLogo">
                    <i className="devicon-javascript-plain colored"></i> 
                    <p className="logoDescription">JAVASCRIPT</p>
                </div>
                <div className="singleLogo">
                    <i className="devicon-css3-plain colored"></i> 
                    <p className="logoDescription">CSS3</p>
                </div>
                <div className="singleLogo">
                    <i className="devicon-html5-plain colored"></i> 
                    <p className="logoDescription">HTML5</p>
                </div>
                <div className="singleLogo">
                    <i className="devicon-webpack-plain colored"></i> 
                    <p className="logoDescription">WEBPACK</p>
                </div>
                <div className="singleLogo">
                    <i className="devicon-firebase-plain colored"></i> 
                    <p className="logoDescription">FIREBASE</p>
                </div>
                <div className="singleLogo">
                    <i className="devicon-nodejs-plain colored"></i> 
                    <p className="logoDescription">NODEJS</p>
                </div>
                <div className="singleLogo">
                    <i className="devicon-express-original colored"></i> 
                    <p className="logoDescription">EXPRESS</p>
                </div>
                <div className="singleLogo">
                    <i className="devicon-npm-original-wordmark colored"></i> 
                    <p className="logoDescription">NPM</p>
                </div>
                <div className="singleLogo">
                    <i className="devicon-git-plain colored"></i> 
                    <p className="logoDescription">GIT</p>
                </div>
            </div>
        </div>
        <hr/>
    </section>
  );
}

export default About;