import React from "react";
import "./NavBar.css";

function NavBar(props) {



    return (

        <div className="nav-bar">

            <div className="nav-logo"></div>

            <div className="nav-items">
                <a href="/destination">Destination</a>
                <a href="/about">About</a>
                <a href="/logging">Logging</a>
            </div>

        </div>

    )
};

export default NavBar;

