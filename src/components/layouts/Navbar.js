import React, { useState } from 'react'
import { FaAlignJustify } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Navbar() {

    const [collapse, setCollapse] = useState('true')

    return (
        <div className="navbar navbar-expand-lg navbar-light bg-lght">
            <span className="mr-auto h2">
                Food Bots
            </span>
            <button onClick={() => setCollapse(!collapse)} className="btn btn-dark display-inline-block d-lg-none ml-auto"
                type="button" data-toggle="collapse" data-target="#navdBarContents"
                aria-controls="navBarContents" aria-expanded="true" aria-label="Toggle Navigation Content">
                <FaAlignJustify />
            </button>
            <div className={collapse ? "collapse navbar-collapse  h5" : "navbar-collapse  h5"} id="navBarContents" >
                <ul onClick={() => setCollapse(!collapse)} className="nav navbar-nav ml-auto" >
                    <li className="nav-item px-lg-3" >
                        <Link to="/profile">Profile </Link>
                    </li>

                    <li className="nav-item px-lg-3"> <Link to="/order-summary">Order Summary</Link></li>
                </ul>
            </div>
        </div>
    )
}
