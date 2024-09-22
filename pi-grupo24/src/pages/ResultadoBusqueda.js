import React from 'react';
import { Component } from 'react';
// import MovieCard from '../../Components/NowPlayingCard/NowPlayingCard';


class ResultadoBusqueda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valorInput: "",
      peliculas: [],
      favoritos: localStorage.getItem('favoritos') ? JSON.parse(localStorage.getItem('favoritos')) : [],
    };
  }

  componentDidMount() {
    fetch("aca va la url donde busca el usuario y le aparecen los resultados en una pag nueva!!! y se le agrega un =${this.props.location.state.valorInput}")
      .then((res) => res.json())
      .then((data) => this.setState({ peliculas: data.results }))
      .catch((e) => console.log(e))
  }

  updateStateFavs(array) {
    this.setState({
      favoritos: array
    })
  }

  render() {
    return (
     <p></p>
    )
  }

}
export default ResultadoBusqueda;