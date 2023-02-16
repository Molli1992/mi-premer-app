import React from "react";
import "./NavBar.css";

function NavBar(props) {



    return (

        <div className="nav-bar">

            <div className="nav-logo"></div>

            <div className="nav-items">
                <a href="/celulares">Celulares</a>
                <a href="/about">About</a>
                <a href="/login">{document.cookie ? "Profile " : "Log In"}</a>
                <a href="/sing-up">Sing-up</a>
                <a href="/compras">Carrito</a>
            </div>

        </div>

    )
};

export default NavBar;

