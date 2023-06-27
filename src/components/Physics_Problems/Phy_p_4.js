import React from "react";
import { Link } from "react-router-dom";
import { Card, CardImg } from "reactstrap";

function Phy_p_4 () {
    return(
        <Card className='cards'>
            <CardImg width="100%" src={'/assets/images/Phy_P-4.jpg'} alt='Problem 1'></CardImg>
            <div className="button">
                <a role="button" className="btn" href="/Math_Solutions/Phy_S-4"><p>solution</p></a>
            </div>
        </Card>
    )
}

export default Phy_p_4