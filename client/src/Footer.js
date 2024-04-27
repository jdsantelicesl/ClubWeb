import React from 'react';
import "./App.css";
import image2 from "./scc-logo.png"

const Footer = () => {
    return (
        <div className="footer">
            <img className="logoImg" src={image2} />
            <p>
                <h2>Sacramento City College</h2>

                (916) 558-2111 <br />
                3835 Freeport Boulevard <br />
                Sacramento, CA 95822
            </p>
            <p>
                <h2>Davis Center</h2>

                    (530) 747-5200 <br />
                    1720 Jade Street <br />
                    Davis, CA 95616
            </p>
            <p>     
                <h2>West Sacramento Center</h2>

                    (916) 375-5511 <br />
                    1115 West Capitol Avenue <br />
                    West Sacramento, CA 95691

            </p>
        </div>
    )
}

export default Footer;