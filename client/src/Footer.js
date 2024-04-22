
import React from 'react';
import "./App.css";
import image2 from "./scc-logo.png"

const Footer = () => {
    return (
        <div className="footer">
            <img className="logoImg" src={image2} />
            <p>
Sacramento City College

    (916) 558-2111
    3835 Freeport Boulevard
    Sacramento, CA 95822
    </p>
<p>
Davis Center

    (530) 747-5200
    1720 Jade Street
    Davis, CA 95616
</p>
<p>
West Sacramento Center

    (916) 375-5511
    1115 West Capitol Avenue
    West Sacramento, CA 95691

</p>
        </div>
    )
}

export default Footer;