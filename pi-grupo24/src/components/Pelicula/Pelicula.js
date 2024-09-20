import { Component } from "react";
import "../Pelicula/Pelicula.css";
import { Link } from "react-router-dom";

class Pelicula extends Component {
    constructor(props){
        super(props)
        this.state = {
            verMas: false,
            esFavorito: false
        }
    }

    handleVerMas(){
        this.setState({
            verMas: !this.state.verMas
        })
    }

    componentDidMount(){
        const storage = localStorage.getItem("favoritos")
        if ( storage !== null ){
          const parsedStorage = JSON.parse(storage)
          const estaEnFavoritos = parsedStorage.includes(this.props.pelicula.id)
          if(estaEnFavoritos){
            this.setState({
              esFavorito: true
            })
          }
        }
      }
    
      agregarAFavoritos(){
        const storage = localStorage.getItem("favoritos")
        if ( storage !== null ){
          const parsedStorage = JSON.parse(storage)
          parsedStorage.push(this.props.pelicula.id)
          const stringStorage = JSON.stringify(parsedStorage)
          localStorage.setItem("favoritos", stringStorage)
        } else {
          const primerFavorito = [this.props.pelicula.id]
          const stringStorage = JSON.stringify (primerFavorito)
          localStorage.setItem("favoritos", stringStorage)
        }
        this.setState({
          esFavorito: true
        })
    
      }
    
      quitarFavoritos(){ // NO PREGUTNO PQ YA SE Q ESTA EN FAVORITOS
        const storage = localStorage.getItem("favoritos")
        const parsedStorage = JSON.parse(storage)
        const restoFavoritos = parsedStorage.filter((id) => id !== this.props.pelicula.id)
        const stringStorage = JSON.stringify(restoFavoritos)
        localStorage.setItem("favoritos", stringStorage)
        this.setState({
          esFavorito: false
        })
      }

    render(){
        const {title, id, poster_path, overview, vote_average, release_date} = this.props.pelicula
        return(
            <article className="elemento">
                <h3 className="sub-elemento" >Título: {title}</h3>
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="portada" className="img-producto"/> 
                <p className={ this.state.verMas ? "sub-elemento mostrar" : "sub-elemento ocultar"}>Sinopsis: {overview}</p>
                <button className="botonFavoritos" onClick={ () => this.handleVerMas()}> {this.state.verMas ? "Ocultar descripción" : "Ver descripción"} </button>
                <p className="sub-elemento">Rating: {vote_average}</p>
                <p className="sub-elemento">Fecha de estreno: {release_date}</p>
                <Link className="sub-elemento" to="/detallePelicula">Ir al detalle</Link>
                {/* HACER FUNCIONALIDAD DE AGREGAR Y QUITAR DE FAVORITOS */}
                <button className="botonFavoritos" onClick={() =>  !this.state.esFavorito ? this.agregarAFavoritos() : this.quitarFavoritos()} >{!this.state.esFavorito ? "Agregar a favoritos" : "Quitar de favoritos"}</button>
            </article>
        )
    }
}

export default Pelicula;