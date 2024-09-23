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
            parsedStorage.push(this.props.pelicula.id)
            const stringStorage = JSON.stringify(parsedStorage)
            localStorage.setItem("favoritos", stringStorage)
        } else {
            const primerFavorito = [this.props.pelicula.id]
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
        const restoFavoritos = parsedStorage.filter((id) => id !== this.props.pelicula.id)
        const stringStorage = JSON.stringify(restoFavoritos)
        localStorage.setItem("favoritos", stringStorage)
        this.setState({
            esFavorito: false
        })
    }

    render() {
        const { title, id, poster_path, overview, vote_average, release_date } = this.state.pelicula
        return (
            // console.log(this.props.match.params.id)
            

            <article className="elemento">
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="portada" className="img-producto" />
                <h3 className="sub-elemento" >Título: {title}</h3>
                <p className="sub-elemento">Rating: {vote_average}</p>
                <p className="sub-elemento">Fecha de estreno: {release_date}</p>
                <p className="sub-elemento mostrar">Sinopsis: {overview}</p>
                <button className="botonFavoritos" onClick={() => !this.state.esFavorito ? this.agregarAFavoritos() : this.quitarFavoritos()} >{!this.state.esFavorito ? "Agregar a favoritos" : "Quitar de favoritos"}</button>
            </article>
        )
        // let DetalleCardContenido = this.state
        //   return (

        //      this.state.DetalleCardContenido.length !== 0 ?

        //     <div className="DetallePelicula">
        //         <img className="imgcardDetalle" src={`https://image.tmdb.org/t/p/w500/${DetalleCardContenido.DetalleCardContenido.poster_path}/images`} alt={DetalleCardContenido.DetalleCardContenido.title}></img>
        //         <p> {this.state.title}</p>
        //         <p> ESTRENO : {DetalleCardContenido.DetalleCardContenido.release_date}</p>
        //         <p> DURACIÓN : {DetalleCardContenido.DetalleCardContenido.runtime}</p>
        //         <p> RATING : {DetalleCardContenido.DetalleCardContenido.popularity}</p>
        //         <p> GENERO : AGREGAR GENEROS CON MAP </p>
        //         <p> SINOPSIS : {DetalleCardContenido.DetalleCardContenido.overview} </p>
        //         <p> AGREGAR A FAVORITOS : Me falta el boton de Favoritos </p>

        //     </div> :
        //     <h3>Loader</h3> 

        // )
    }
}
export default DetalleCard;