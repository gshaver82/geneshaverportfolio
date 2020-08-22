import React from "react";
import Wrapper from "../components/Wrapper";
import PortfolioCard from "../components/PortfolioCard";
import Title from "../components/Title";
import PortfolioJSON from "../PortfolioJSON.json";

function PortfolioPage() {
    return (
        <Wrapper>
            <Title>Portfolio List</Title>
            {PortfolioJSON.map(PortfolioItem => (
                <PortfolioCard className="list-group-item"
                    key={PortfolioItem.id}
                    TitleOfProject={PortfolioItem.TitleOfProject}
                    screenshot={PortfolioItem.screenshot}
                    ProjectDescription={PortfolioItem.ProjectDescription}
                    githubLink={PortfolioItem.githubLink}
                    deployedLink={PortfolioItem.deployedLink}
                >
                </PortfolioCard>
            ))}
        </Wrapper>
    );
}

export default PortfolioPage;

