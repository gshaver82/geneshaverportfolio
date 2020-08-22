import React from "react";

function NavTabs() {
    return (
        <div>
            <p>contact page</p>
            <strong>Phone number:</strong>
            <p>(612) 504-0502‬</p>
            <strong>Email:</strong>
            <p>geneshaver@gmail.com‬</p>
            <p>
                <strong>LinkedIn link (opens in new tab): </strong>
                <a href=
                    "https://www.linkedin.com/in/gene-shaver-7b574b1a4/"
                    target="_blank"
                    rel="noopener noreferrer">
                    LinkedIn
        </a>
            </p>
            <p>
                <strong>Github link (opens in new tab): </strong>
                <a href=
                    "https://github.com/gshaver82"
                    target="_blank"
                    rel="noopener noreferrer">
                    Github
        </a>
            </p>
        </div>

    );
}
export default NavTabs;