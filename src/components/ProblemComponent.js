import React from "react";
import { Media } from "reactstrap";
import { Outlet, Link } from "react-router-dom";
import './Problem.css'

function ProblemSolved (props) {
    return(
        <>
            <div className="button">
                <a role="button" className="btn" href="/Subject-pages/Math"><p>Math</p></a>
            </div>
            <div className="button">
                <a role="button" className="btn" href="/Subject-pages/Physics"><p>Physics</p></a>
            </div>
            <div className="button">
                <a role="button" className="btn" href="/Subject-pages/Biology"><p>Biology</p></a>
            </div>
            <div className="button">
                <a role="button" className="btn" href="/Subject-pages/Chemistry"><p>Chemistry</p></a>
            </div>
        </>
    )
}

export default ProblemSolved