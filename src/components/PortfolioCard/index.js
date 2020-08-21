import React from "react";
import "./style.css";

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
        <img alt={props.TitleOfProject} src={props.screenshot} />
      </div>
    </div>
  );
}

export default PortfolioCard;
