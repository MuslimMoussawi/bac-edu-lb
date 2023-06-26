import React from "react";
import { Card, CardImg } from "reactstrap";

function Math_p_3 () {
    return(
        <Card className='cards'>
            <CardImg width="100%" src={'/assets/images/Problem_3.jpg'} alt='Problem 1'></CardImg>
            <div className="button">
                <a role="button" className="btn" href="/Math_Solutions/Math_S_3"><p>solution</p></a>
            </div>
        </Card>

        
    )
}

export default Math_p_3