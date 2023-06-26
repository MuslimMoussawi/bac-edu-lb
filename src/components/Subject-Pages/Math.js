import React from "react";
import { Outlet, Link } from "react-router-dom";

function Math () {
    return(
        <>
            <div className="button">
              <a role="button" className="btn" href="/Math_Problems/Math_p_1"><p>Problem 1</p></a>
            </div>
            <div className="button">
                <a role="button" className="btn" href="/Math_Problems/Math_p_2"><p>Problem 2</p></a>
            </div>
            <div className="button">
                <a role="button" className="btn" href="/Math_Problems/Math_p_3"><p>Problem 3</p></a>
            </div>
            <div className="button">
                <a role="button" className="btn" href="/Math_Problems/Math_p_4"><p>Problem 4</p></a>
            </div>

        </>
    )
}

export default Math