import React from 'react';
import { Component} from 'react';
import MovieCard from '../../Components/NowPlayingCard/NowPlayingCard';


class ResultadoBusqueda extends Component {
    constructor(props) {
        super(props);
        this.state = {
          valorInput: "",
          peliculas: [],
          favoritos : localStorage.getItem('favoritos')? JSON.parse(localStorage.getItem('favoritos')) :[],
        };
      }

      componentDidMount () {
        fetch()
        .then(res => res.json())
        .then( data  => this.setState({ peliculas: data.results}))
        .then( e => console.log(e))
      }

      updateStateFavs(array){
        this.setState({
          favoritos: array
        })
      }
 
    render(){
        return(
            <div className='divsinclase'>

                {console.log(this.state.peliculas)}
                
                {this.state.peliculas.map ((elm,idx) => 
                <MovieCard 
                data= {elm}  
                key={idx + elm.title}

                updateStateFavs = {(array) => this.updateStateFavs(array)}
                estaEnFavorito = {this.state.favoritos.includes(elm.id)}
                />)}
               
            </div>
          

        )
    }

}
export default ResultadoBusqueda;