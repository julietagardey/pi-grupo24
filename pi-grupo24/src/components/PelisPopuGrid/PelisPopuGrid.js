import {Component} from "react";
import "../PelisPopuGrid/PelisPopuGrid.css"
import PeliPopu from "../PeliPopu/PeliPopu";

const apiKey = "f2d31985b9fc9e720758bcc82e3c955b"

class PelisPopuGrid extends Component {
    constructor(props){
        super(props)
        this.state = {
            arrayPelisPopu: []
        }
    }
    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
            .then(response => response.json())
            .then(data => this.setState({arrayPelisPopu: data.results}))
            .catch(e => console.log(e))
    }
    render(){
        return(
            <>
            {this.state.arrayPelisPopu.length > 0 ?
            <section>
                {
                    this.state.arrayPelisPopu.map((peliPopu, idx) => (
                        <PeliPopu key={idx} peliculaPopu={peliPopu} />
                    ))
                }
            </section> :
            <h3>Cargando...</h3>
            }
            </>
        )
    }
}

export default PelisPopuGrid;