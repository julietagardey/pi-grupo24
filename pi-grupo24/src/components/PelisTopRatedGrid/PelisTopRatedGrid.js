import {Component} from "react";
import "../PelisPopuGrid/PelisPopuGrid.css"
import PeliTopRated from "../PeliTopRated/PeliTopRated";

const apiKey = "f2d31985b9fc9e720758bcc82e3c955b"

class PelisTopRatedGrid extends Component {
    constructor(props){
        super(props)
        this.state = {
            arrayPelisTopRated: []
        }
    }
    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`) // CAMBIAR URL 
            .then(response => response.json())
            .then(data => this.setState({arrayPelisTopRated: data.results}))
            .catch(e => console.log(e))
    }
    render(){
        return(
            <>
            {this.state.arrayPelisTopRated.length > 0 ?
            <section>
                {
                    this.state.arrayPelisTopRated.map((peliTopRated, idx) => (
                        <PeliTopRated key={idx} peliculaTopRated={peliTopRated} />
                    ))
                }
            </section> :
            <h3>Cargando...</h3>
            }
            </>
        )
    }
}

export default PelisTopRatedGrid;