import React from "react";
import "./style.css";

// href="%PUBLIC_URL%/favicon.ico" 

function PortfolioCard(props) {
  return (
    <div className="card">
      <div className="content">

        <div className="projecttitle">
          <strong>{props.TitleOfProject}</strong>
        </div>
        <br />
        <strong>ProjectDescription:</strong>
        {props.ProjectDescription}

      </div>
      <div className="img-container">
        <a href={props.screenshot}>
          <img src={props.screenshot } alt={props.TitleOfProject} />

        </a>
        {/* this does not work */}
        {/* <img alt="screenshot" src={require(props.screenshot)} /> */}
      </div>
    </div>
  );
}
export default PortfolioCard;
