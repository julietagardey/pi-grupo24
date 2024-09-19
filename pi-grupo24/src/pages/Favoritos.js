import PeliculasGrid from "../components/PeliculasGrid/PeliculasGrid";


class Favoritos extends Component {
    constructor(props){
        super(props)
        this.state = {
            peliculas: []
        }
    }

    render(){
        return(
            <PeliculasGrid />
        )
    }

}

export default Favoritos;