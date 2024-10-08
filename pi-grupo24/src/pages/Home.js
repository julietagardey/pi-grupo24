import { Component } from "react";
import FormBusqueda from "../components/FormBusqueda/FormBusqueda";
import PeliculasGrid from "../components/PeliculasGrid/PeliculasGrid";


class Home extends Component { 
    constructor(props){
        super(props)
        this.state ={

        }
    }
    render(){
       const apiKey = "f2d31985b9fc9e720758bcc82e3c955b";

    return(
        <>
        <h1>Home</h1>
        <main>
            {/* Form de búsqueda */}
            <FormBusqueda history={this.props.history} />

            {/* 2 sections con 5 elementos */}
            {/* cada section con su filtro buscatos (se hace con el .filter()) */}
            <PeliculasGrid url={`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`} titulo="Películas Populares" enlace="/populares"/>
            <PeliculasGrid url={`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`} titulo="Películas Más Valoradas" enlace="/toprated"/>
            
        </main>
        </>
    ) 
    }
}

export default Home;