import {Component} from "react";
import Pelicula from "../Pelicula/Pelicula";
import "../PeliculasGrid/PeliculasGrid.css";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";


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
                <div className="tituloSeccion">
                    <Link className="verTodas" to={this.props.enlace}>Ver todas</Link>
                </div>
            </section> :
            <Loader/>
            }
            </>
        )
    }
}

export default PeliculasGrid;