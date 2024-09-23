import { Component } from "react";
import PeliculasFavs from "../components/PeliculasFavs/PeliculasFavs";


class Favoritos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrayPeliculas: []
        }
    }
    componentDidMount() {
        const storage = localStorage.getItem("favoritos")
        if (storage !== null) {
            const parsedStorage = JSON.parse(storage)
            Promise.all( // esto es para que renderice bien y se resuelvan todas las promesas
                parsedStorage.map((id) =>
                    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f2d31985b9fc9e720758bcc82e3c955b`)
                        .then((response) => response.json())
                )
            )
                .then((data) => {
                    this.setState({
                        arrayPeliculas: data// esto es para qe no se pisen las peliculas y se desparramen
                    })
                })


        }
    }

    render() {
        return (
            <>
                {
                    this.state.arrayPeliculas.length > 0 ? (
                        <>
                            <h2>Mis pelis favoritas</h2>
                            <PeliculasFavs arrayPeliculas={this.state.arrayPeliculas} />
                        </>
                    ) : (
                        <h2>No hay películas en favoritos</h2>
                    )
                }
            </>
        )
    }

}

export default Favoritos;