import { Component } from "react";
import "../Pelicula/Pelicula.css";
import { Link } from "react-router-dom";

class Pelicula extends Component {
    constructor(props){
        super(props)
        this.state = {
            verMas: false
        }
    }

    handleVerMas(){
        this.setState({
            verMas: !this.state.verMas
        })
    }

    render(){
        const {title, id, poster_path, overview, vote_average, release_date} = this.props.pelicula
        return(
            <article className="elemento">
                <h3 className="sub-elemento" >Título: {title}</h3>
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="portada" className="img-producto"/> 
                <p className={ this.state.verMas ? "sub-elemento mostrar" : "sub-elemento ocultar"}>Sinopsis: {overview}</p>
                <button onClick={ () => this.handleVerMas()}> {this.state.verMas ? "No ver descripción" : "Ver descripción"} </button>
                <p className="sub-elemento">Rating: {vote_average}</p>
                <p className="sub-elemento">Fecha de estreno: {release_date}</p>
                <Link className="sub-elemento" to="/detallePelicula">Ir al detalle</Link>
                {/* HACER FUNCIONALIDAD DE AGREGAR Y QUITAR DE FAVORITOS */}
                <button className="botonFavoritos">Agregar a favoritos</button> 
            </article>
        )
    }
}

export default Pelicula;