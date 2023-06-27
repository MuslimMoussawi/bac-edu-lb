import React from "react";
import { Link } from "react-router-dom";
import { Card, CardImg } from "reactstrap";

function Phy_p_1 () {
    return(
        <Card className='cards'>
            <CardImg width="100%" src={'/assets/images/Phy_P-1.jpg'} alt='Problem 1'></CardImg>
            <div className="button">
                <a role="button" className="btn" href="/Phy_Solutions/Phy_S_1"><p>solution</p></a>
            </div>
        </Card>
    )
}

export default Phy_p_1