import React from "react";

function Title() {
  return (
    <section>
        <h1 className="pageTitle" id="topPage">
            <span>Matteo</span>
            <span>Bacchetti </span>
            <span className="rightSide">Full-Stack</span>
            <span className="rightSide">Developer</span>
        </h1>
        <div className="square"></div>
        <div className="subTitle">
            <hr/><div></div>
            <div className="info">
                <span>Based in</span>
                <span>Italy &nbsp; &nbsp;<span className="wave">👋</span></span>
            </div>
        </div>
    </section>
  );
}

export default Title;