import React from "react";
import Wrapper from "../components/Wrapper";
import Styledh4 from "../components/styledh4";

function Home() {
    return (
        <Wrapper>
            <Styledh4>
                I look forward to putting my passion for programming, building, and creating to work.
                Please visit my portfolio to see my creations thus far.
                Most of my work has been for a local cryonics group, some free work, some paid.
                This has given me valuable experience creating real working applications for users that solve their particular needs.
            </Styledh4>

            <Styledh4>
                Completed U of MN web development bootcamp.
                Skilled in React JavaScript HTML CSS JQuery and others.
            </Styledh4>
            <div>
                <img src={require('../50percentProfilePic.jpg')} alt="Profile Pic" class="responsive" ></img>
            </div>
        </Wrapper>
    );
}

export default Home;
