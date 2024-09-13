import { Component } from "react";

class PeliPopu extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        const {title, overview, vote_average, release_date, poster_path} = this.props.peliculaPopu
        return(
            <article>
                <h2>Título: {title}</h2>
                <p>Sinopsis: {overview}</p>
                <p>Rating: {vote_average}</p>
                <p>Fecha de estreno: {release_date}</p>
                <img src="" alt="Imagen"/>

            </article>
        )
    }
}

export default PeliPopu;