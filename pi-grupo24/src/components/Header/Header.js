import React from "react";
import { Link } from "react-router-dom";
// import "./Header.css"

const Header = () => {
    return (
        <header>
            <section className="headerIzquierda">
                <img className="logo" src="./img/logo.png" alt="logo" />

                <Link to="/" className="home">
                    <h2 className="home">Inicio</h2>
                </Link>
            </section>
            <nav className="headerDerecha">
                <article className="linksHeader">
                    <Link to="/Favorites" className="linkfavoritos">
                        Favoritos
                    </Link>
                    <Link to="/NowPlayingVista" className="linkfavoritos">
                        En Cartel
                    </Link>
                    <Link to="/TopRatedVista" className="linkfavoritos">
                        Más Populares
                    </Link>
                </article>
            </nav>
        </header>
    )
}

export default Header;