import React from "react";
import Wrapper from "../components/Wrapper";
import Styledh4 from "../components/styledh4";

function Home() {
    return (
        <Wrapper>
            <Styledh4>
                With a passion for crafting, building, and seeing my creations at work I have ... lost many hours to games like factorio.
                I look forward to putting that passion to work on web design and maybe even to AI design.
                Please visit my portfolio to see my creations thus far. 
            </Styledh4>

            <Styledh4>
                Completed U of MN web development bootcamp. 
                Skilled in React JavaScript HTML CSS JQuery and others. 
            </Styledh4>
            <div>
                <img src={require('../ProfilePic25percent.jpg')} alt="HTML tutorial" class="responsive" ></img>
            </div>
        </Wrapper>
    );
}

export default Home;
