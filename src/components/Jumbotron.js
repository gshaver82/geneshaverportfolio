import React from "react";
import Pdf from "../Util/GeneShaverResume.pdf";

function Jumbotron() {
  return (
    <div className="jumbotron">
      <h1>Gene Shaver</h1>
      <p>
        Here are some links
      </p>
      <a href = {Pdf} target = "_blank" rel="noopener noreferrer">Resume Pdf</a>
      <br/>
      <a href="https://github.com/gshaver82" target = "_blank" rel="noopener noreferrer">Github</a>
      <br/>
      <a href="https://www.linkedin.com/in/gene-shaver-7b574b1a4/" target = "_blank" rel="noopener noreferrer">Linkedin</a>

    </div>
  );
}

export default Jumbotron;
