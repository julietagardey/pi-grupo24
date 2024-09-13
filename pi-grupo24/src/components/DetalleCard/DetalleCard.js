import React, { Component } from "react";

class DetalleCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            DetalleCardContenido: []
        }
    }

    componentDidMount() {
        fetch()
            .then(resp => resp.json())
            .then(data => {
                console.log(this.props.match.params.id)
                this.setState({
                    DetalleCardContenido: data
                })
            })
            .catch(er => console.log(er))
    }


    render() {
        let DetalleCardContenido = this.state
        console.log(DetalleCardContenido.DetalleCardContenido.id);
        return (

             this.state.DetalleCardContenido.length !== 0 ?

            <div className="DetallePelicula">
                <img className="imgcardDetalle" src={`https://image.tmdb.org/t/p/w500/${DetalleCardContenido.DetalleCardContenido.poster_path}/images`} alt={DetalleCardContenido.DetalleCardContenido.title}></img>
                <p> {DetalleCardContenido.DetalleCardContenido.title}</p>
                <p> ESTRENO : {DetalleCardContenido.DetalleCardContenido.release_date}</p>
                <p> DURACIÓN : {DetalleCardContenido.DetalleCardContenido.runtime}</p>
                <p> RATING : {DetalleCardContenido.DetalleCardContenido.popularity}</p>
                <p> GENERO : AGREGAR GENEROS CON MAP </p>
                <p> SINOPSIS : {DetalleCardContenido.DetalleCardContenido.overview} </p>
                <p> AGREGAR A FAVORITOS : Me falta el boton de Favoritos </p>

            </div> :
            <h3>Loader</h3> 
                        
        )
    }
}



export default DetalleCard;