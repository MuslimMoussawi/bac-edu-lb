import React from "react";
import { Card, CardImg } from "reactstrap";
import './style.css'

function Math_p_1 () {
    return(
        <Card className='cards'>
            <CardImg width="100%" src={'/assets/images/Problem_1.jpg'} alt='Problem 1'></CardImg>
        </Card>
    )
}

export default Math_p_1