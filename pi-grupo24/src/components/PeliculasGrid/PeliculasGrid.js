import {Component} from "react";
import Pelicula from "../Pelicula/Pelicula";
import "../PeliculasGrid/PeliculasGrid.css";


class PeliculasGrid extends Component {
    constructor(props){
        super(props)
        this.state = {
            arrayPeliculas: []
        }
    }
    componentDidMount(){
        fetch(this.props.url)
            .then(response => response.json())
            .then(data => this.setState({arrayPeliculas: data.results}))
            .catch(e => console.log(e))
    }
    render(){
        // ME FALTA HACER LINK A VER TODAS POR SECCION
        return(
            <>
            {this.state.arrayPeliculas.length > 0 ?
            <section className="pelis">
                <h2 className="tituloSeccion" >{this.props.titulo}</h2>
                {
                    this.state.arrayPeliculas.map((pelicula, idx) => {
                        if(idx <= 4){
                            return <Pelicula key={idx} pelicula={pelicula} />
                        }
                    })
                }
            </section> :
            <h3>Cargando...</h3>
            }
            </>
        )
    }
}

export default PeliculasGrid;