import React from "react";
import { Link } from "react-router-dom";

function Physics () {
    return(
        <>
            <div className="button">
              <a role="button" className="btn" href="/Physics_Problems/Phy_p_1"><p>Problem 1</p></a>
            </div>
            <div className="button">
                <a role="button" className="btn" href="/Physics_Problems/Phy_p_2"><p>Problem 2</p></a>
            </div>

        </>
    )
}

export default Physics