import { Component } from "react";

class PeliTopRated extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        const {title, overview, vote_average, release_date, poster_path} = this.props.peliculaTopRated
        return(
            <article>
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="Imagen"/>
                <h2>Título: {title}</h2>
                <p>Sinopsis: {overview}</p>
                <p>Rating: {vote_average}</p>
                <p>Fecha de estreno: {release_date}</p>
                

            </article>
        )
    }
}

export default PeliTopRated;