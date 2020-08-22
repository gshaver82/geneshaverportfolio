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
        <br/>
        <strong>Github link (opens in new tab):</strong>
        <a href={props.githubLink} target="_blank" rel="noopener noreferrer">
          Link
        </a>
        <br/>
        <strong>Deployed application link (opens in new tab):</strong>
        <a href={props.deployedLink} target="_blank" rel="noopener noreferrer">
          Link
        </a>
        <br/>
      </div>
      <div className="img-container">
              <a href={props.screenshot}>
          <img src={props.screenshot} alt={props.TitleOfProject} />

        </a>
      </div>
    </div>
  );
}
export default PortfolioCard;
