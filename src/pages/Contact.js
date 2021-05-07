import React from "react";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import Styledh3 from "../components/styledh3";
import Styledh4 from "../components/styledh4";

function NavTabs() {
    return (
        <Wrapper>
            <Title>contact page</Title>
            <div>
                <Styledh3>Phone number:</Styledh3>
                <Styledh4>(612) 504-0502‬</Styledh4>
                <Styledh3>Email:</Styledh3>
                <Styledh4>geneshaver@gmail.com‬</Styledh4>
                <Styledh3>Email Link:</Styledh3>
                <Styledh4><a href="mailto:geneshaver@gmail.com‬">geneshaver@gmail.com</a></Styledh4>
                <Styledh3>LinkedIn link (opens in new tab): </Styledh3>
                <Styledh4>
                    <a href=
                        "https://www.linkedin.com/in/gene-shaver-7b574b1a4/"
                        target="_blank"
                        rel="noopener noreferrer">
                        LinkedIn
                </a>
                </Styledh4>
                <Styledh3>Github link (opens in new tab): </Styledh3>
                <Styledh4>
                    <a href=
                        "https://github.com/gshaver82"
                        target="_blank"
                        rel="noopener noreferrer">
                        Github
                </a>
                </Styledh4>
                <Styledh3>Resume link (opens in new tab): </Styledh3>
                <Styledh4>
                    <a href=
                        "https://github.com/gshaver82"
                        target="_blank"
                        rel="noopener noreferrer">
                        Resume
                </a>
                </Styledh4>
            </div>
        </Wrapper>
    );
}
export default NavTabs;