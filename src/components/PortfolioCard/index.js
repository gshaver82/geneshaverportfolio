import React from "react";
import "./style.css";

function PortfolioCard(props) {
  return (
    <div className="card2">
      <div className="content">
        <div className="projecttitle">
          <strong>{props.TitleOfProject}</strong>
        </div>
        <br />
        <strong>Github link:</strong>(opens in new tab)
        {props.githubLink.length > 0 && (
          <>
            <a
              href={props.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </a>
            <span style={{ fontSize: '0.8em', marginLeft: '0.25rem' }}>
              (opens in new tab)
            </span>
            <br />
          </>
        )}

        <strong>Deployed application link:</strong>
        <a href={props.deployedLink} target="_blank" rel="noopener noreferrer">
          Link
        </a>(opens in new tab)
        <br />
        <strong>ProjectDescription:</strong>
        {props.ProjectDescription}
        <br />
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
