import React from "react";
import logo from "./logo2.png"

function Header() {

  let prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0%";
    } else {
        document.getElementById("navbar").style.top = "-120px";
    }
    prevScrollpos = currentScrollPos;
  } 

  function closeNav(){
    document.getElementById("navbar").style.top = "-120px"
  }

  function goToSection(e){
    const yOffset = -104; 
    if(e.target.id === "aboutBtn"){
        const element = document.getElementById("about");
        const y = element.getBoundingClientRect().top + window.pageYOffset ;
        window.scrollTo({top: y, behavior: 'smooth'});
        setTimeout(closeNav,850);
    }
    if(e.target.id === "projectsBtn"){
        const element = document.getElementById("projects");
        const y = element.getBoundingClientRect().top + window.pageYOffset ;
        window.scrollTo({top: y, behavior: 'smooth'});
        setTimeout(closeNav,850);
    }
    if(e.target.id === 'contactBtn'){
        const element = document.getElementById("contact"); 
        const y = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
        setTimeout(closeNav,850);
    }
    if(e.target.className === "logo"){
        const element = document.getElementById("topPage"); 
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
    }
    if(e.target.className === "buttonMenu"){
        document.querySelector(".toggler").checked = false;
    }
  }

  return (
    <header id="navbar">
        <nav>
            <button className="logoContainer"><img className="logo" src={logo} alt="Matteo Bacchetti Logo" onClick={(e)=>goToSection(e)}/></button>
            <ul className="userOptions">
                <li><button className="pageOptions" id="aboutBtn" onClick={(e)=>goToSection(e)}>About</button></li>
                <li><button className="pageOptions" id="projectsBtn" onClick={(e)=>goToSection(e)}>Projects</button></li>
                <li><button className="pageOptions" id="contactBtn" onClick={(e)=>goToSection(e)}>Contact</button></li>
            </ul>
            <div className="menuContainer">
                <input type="checkbox" className="toggler"/>
                <div className="hamburger"><div></div></div>
                <div className="menu">
                    <div>
                        <div>
                            <ul>
                                <li><button className="buttonMenu" id="aboutBtn" onClick={(e)=>goToSection(e)}>About</button></li>
                                <li><button className="buttonMenu" id="projectsBtn" onClick={(e)=>goToSection(e)}>Projects</button></li>
                                <li><button className="buttonMenu" id="contactBtn" onClick={(e)=>goToSection(e)}>Contact</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
  );
}

export default Header;