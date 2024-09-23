import { Component } from "react";
import "../DetalleCard/DetalleCard.css"

class DetalleCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            esFavorito: false,
            pelicula: {}
        }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/${this.props.id}?api_key=f2d31985b9fc9e720758bcc82e3c955b`)
            .then(resp => resp.json())
            .then(data => {
                console.log(this.props.id);
                this.setState({
                    pelicula: data
                })
                console.log(data)
            })
            .catch(er => console.log(er))
    }

    agregarAFavoritos() {
        const storage = localStorage.getItem("favoritos")
        if (storage !== null) {
            const parsedStorage = JSON.parse(storage)
            parsedStorage.push(this.state.pelicula.id)
            const stringStorage = JSON.stringify(parsedStorage)
            localStorage.setItem("favoritos", stringStorage)
        } else {
            const primerFavorito = [this.state.pelicula.id]
            const stringStorage = JSON.stringify(primerFavorito)
            localStorage.setItem("favoritos", stringStorage)
        }
        this.setState({
            esFavorito: true
        })
    }

    quitarFavoritos() {
        const storage = localStorage.getItem("favoritos")
        const parsedStorage = JSON.parse(storage)
        const restoFavoritos = parsedStorage.filter((id) => id !== this.state.pelicula.id)
        const stringStorage = JSON.stringify(restoFavoritos)
        localStorage.setItem("favoritos", stringStorage)
        this.setState({
            esFavorito: false
        })
    }

    render() {
        const { title, poster_path, overview, vote_average, runtime, release_date, genres} = this.state.pelicula;
        console.log(genres)
        return (       
            <article className="elemento">
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="portada" className="img-producto" />
                <h3 className="sub-elemento" >Título: {title}</h3>
                <p className="sub-elemento">Rating: {vote_average}</p>
                <p className="sub-elemento">Géneros: </p> <ul>{genres && genres.map((genero) => (<li key={genero.id}>{genero.name}</li>))}</ul>
                <p className="sub-elemento">Fecha de estreno: {release_date}</p>
                <p className="sub-elemento">Duración: {runtime}</p>
                <p className="sub-elemento mostrar">Sinopsis: {overview}</p>
                <button className="botonFavoritos" onClick={() => !this.state.esFavorito ? this.agregarAFavoritos() : this.quitarFavoritos()} >{!this.state.esFavorito ? "Agregar a favoritos" : "Quitar de favoritos"}</button>
            </article>
        )
    }
}
export default DetalleCard;