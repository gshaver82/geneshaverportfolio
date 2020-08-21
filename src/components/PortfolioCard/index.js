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
        {/* <img alt={props.TitleOfProject} src={props.screenshot}  /> */}
        <a href={props.screenshot}>
          <img src={props.screenshot} alt={props.TitleOfProject} />

        </a>
      </div>
    </div>
  );
}
export default PortfolioCard;
