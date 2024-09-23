import React, {Component} from "react";
import Pelicula from "../Pelicula/Pelicula";
import Loader from "../Loader/Loader"

class PeliculasTopRated extends Component {
    constructor(props) {
        super(props)
        this.state = {
            TopRated: [],
            peliculas: [],
            favoritos: localStorage.getItem('favoritos') ? JSON.parse(localStorage.getItem('favoritos')) : [],
            page: 0,
            backup: []
        }
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=f2d31985b9fc9e720758bcc82e3c955b")
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                this.setState({
                    peliculas: data.results,
                    backup: data.results
                })
                console.log(data)
            })
            .catch(er => console.log(er))

    }

    filtrarPeliculas(valorInput) {
        let peliculasFiltradas = this.state.backup.filter(
            (elm) => elm.title.toLowerCase().includes(valorInput.toLowerCase())
        )
        this.setState({
            peliculas: peliculasFiltradas
        })
    }

    updateStateFavs(array) {
        this.setState({
            favoritos: array
        })
    }

    cargarMasPeliculas() {
        fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${(this.state.page + 1)}&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200`)
        .then(resp => resp.json())
            .then(data => this.setState({
                page: this.state.page + 1,
                peliculas: this.state.peliculas.concat(data.results),
                backup: this.state.peliculas.concat(data.results)
            }))
            .catch(err => console.log(err))
    }

    render() {
        return(
            <div className="TopRated">
                <h1 className="titulo">Películas Más Valoradas</h1>
                <div>
                    {/* aca va el filtrador */}
                </div>
                <div className="movieCard">
                    {
                        this.state.peliculas.length > 0 ? 
                            this.state.peliculas.map((pelicula, idx) => 
                                <Pelicula 
                                    key= {idx}
                                    pelicula= {pelicula}
                                    favoritos= {this.state.favoritos.includes(pelicula.id)}
                                    updateStateFavs={(array) => this.updateStateFavs(array)}
                                    className="card"
                                />):
                            <Loader/>
                            
                    }

                    <div className="botonCargarMas">
                        <button onClick={() => this.cargarMasPeliculas()}>Cargar Más</button>
                    </div>

                </div>
            </div>
        )
    }
}

export default PeliculasTopRated;