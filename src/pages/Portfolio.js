import React from "react";
import Wrapper from "../components/Wrapper";
import PortfolioCard from "../components/PortfolioCard";
import Title from "../components/Title";
import PortfolioJSON from "../PortfolioJSON.json";

function PortfolioPage() {
    return (
        <div>
            <p>portfolio page</p>
            <Wrapper>
                <Title>Friends List</Title>
                <PortfolioCard
                    name={PortfolioJSON[0].name}
                    image={PortfolioJSON[0].image}
                    occupation={PortfolioJSON[0].occupation}
                    location={PortfolioJSON[0].location}
                />
                <PortfolioCard
                    name={PortfolioJSON[1].name}
                    image={PortfolioJSON[1].image}
                    occupation={PortfolioJSON[1].occupation}
                    location={PortfolioJSON[1].location}
                />
                <PortfolioCard
                    name={PortfolioJSON[2].name}
                    image={PortfolioJSON[2].image}
                    occupation={PortfolioJSON[2].occupation}
                    location={PortfolioJSON[2].location}
                />
            </Wrapper>

        </div>
    );
}

export default PortfolioPage;

