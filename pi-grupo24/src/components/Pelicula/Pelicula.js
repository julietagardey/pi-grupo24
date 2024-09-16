import { Component } from "react";

class Pelicula extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        const {title, id, poster_path, overview, vote_average, release_date} = this.props.pelicula
        return(
            <article>
                <h3>Título: {title}</h3>
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="portada"/> 
                <p>Sinopsis: {overview}</p>
                <p>Rating: {vote_average}</p>
                <p>Fecha de estreno: {release_date}</p>
                <button>Agregar a favoritos</button> 
            </article>
        )
    }
}

export default Pelicula;