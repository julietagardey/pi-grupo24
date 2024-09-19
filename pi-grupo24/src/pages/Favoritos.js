import { Component } from "react";
import PeliculasFavs from "../components/PeliculasFavs/PeliculasFavs";


class Favoritos extends Component {
    constructor(props){
        super(props)
        this.state = {
            arrayPeliculas: []
        }
    }
    componentDidMount(){
        const storage = localStorage.getItem("favoritos")
        if (storage !== null){
            const parsedStorage = JSON.parse(storage)
            Promise.all( // esto es para que renderice bien y se resuelvan todas las promesas
                parsedStorage.map( (id) => 
                    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f2d31985b9fc9e720758bcc82e3c955b`) 
                    .then((response) => response.json())
                    .then((data) => {
                        this.setState({
                            arrayPeliculas:[...this.state.arrayPeliculas, data] // esto es para qe no se pisen las peliculas y se desparramen
                        })
                    })
                )
            )
        }
    }

    render(){
        return(
            <PeliculasFavs arrayPeliculas={this.state.arrayPeliculas}/>
        )
    }

}

export default Favoritos;