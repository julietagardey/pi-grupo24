import FormBusqueda from "../components/FormBusqueda/FormBusqueda";
import PeliculasGrid from "../components/PeliculasGrid/PeliculasGrid";


const Home = () => {
    const apiKey = "f2d31985b9fc9e720758bcc82e3c955b";

    return(
        <>
        <h1>Home</h1>
        <main>
            {/* Form de búsqueda */}
            {/* <FormBusqueda className="BuscadorHome" history={this.props.history}/> */}

            {/* 2 sections con 5 elementos */}
            {/* cada section con su filtro buscatos (se hace con el .filter()) */}
            <PeliculasGrid url={`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`} titulo="Películas Populares"/>
            <PeliculasGrid url={`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`} titulo="Películas Más Valoradas"/>
            {/* AGREGAR PROPSSS */}
            
        </main>
        </>
    )
};

export default Home;