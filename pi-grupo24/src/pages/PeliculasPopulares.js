import { Component } from "react";
import PeliculasFavs from "../components/PeliculasFavs/PeliculasFavs";



class PeliculasPopulares extends Component {
    constructor(props){
        super(props)
        this.state = {
            movies: [],
            filteredMovies: [],
            filterValue: "",
            actualPage: 1
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=f2d31985b9fc9e720758bcc82e3c955b&page=${this.state.actualPage}`)
        .then(response => response.json())
        .then(data => this.setState({
            movies: data.results,
            filteredMovies: data.results,
            actualPage: this.state.actualPage + 1
        }))
        .catch((e) => console.log(e))
    }

    handlerFilter(e){
        const userValue = e.target.value;
        this.setState({
            filterValue: userValue,
            filteredMovies: this.state.movies.filter((movie) => 
                movie.title.toLowerCase().includes(userValue.toLowerCase())
            )
        })
    }

    handleResetFilter(){
        this.setState({
            filterValue: "",
            filteredMovies: this.state.movies,
        })
    }
    
    handleLoadMore(){
        fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=f2d31985b9fc9e720758bcc82e3c955b&page=${this.state.actualPage}`)
        .then(response => response.json())
        .then(data => this.setState({
            movies: this.state.movies.concat(data.results),
            filteredMovies: this.state.filteredMovies.concat(data.results),
            actualPage: this.state.actualPage + 1
        }))
        .catch((e) => console.log(e))
    }
    
    render(){
        return(
            <>
            <h2>Películas Populares</h2>
            <input  
                type="text"
                value={this.state.filterValue}
                onChange={(e) => this.handlerFilter(e)}

            /> 
            <button onClick={() => this.handleResetFilter()} >Reset Filter</button>
            <PeliculasFavs arrayPeliculas = {this.state.filteredMovies}/>
            <div className="cargarMas" >
                <button className="botonCM" onClick={() => this.handleLoadMore()} >Cargar Más</button>
            </div>
            </>
        )
    }

}

export default PeliculasPopulares;