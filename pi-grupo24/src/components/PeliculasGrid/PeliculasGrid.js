import {Component} from "react";
import Pelicula from "../Pelicula/Pelicula";


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
            <section>
                <h2>{this.props.titulo}</h2>
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