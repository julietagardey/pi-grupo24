import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
    return (
        <header className="header">
            <section className=" hija-logo">
                <img className="logo" src="./img/logo.png" alt="logo" />
            </section>

            <section className="hija-nav">
                <nav className="nav">
                    <ul className="barra-nav">
                        <li className="item"><Link className="linkHeader" to="/">Home |</Link></li>
                        <li className="item"><Link className="linkHeader" to="/favoritos"> Favoritos |</Link></li>
                        <li className="item"><Link className="linkHeader" to="/populares"> Populares |</Link></li>
                        <li className="item"><Link className="linkHeader" to="/toprated"> Más Valoradas</Link></li>
                    </ul>
                </nav>
            </section>
        </header>
    )
}

export default Header;