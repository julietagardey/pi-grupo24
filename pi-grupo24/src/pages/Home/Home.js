import FormBusqueda from "../../components/FormBusqueda/FormBusqueda";
import PelisPopuGrid from "../../components/PelisPopuGrid/PelisPopuGrid";
import PelisTopRatedGrid from "../../components/PelisTopRatedGrid/PelisTopRatedGrid";

const Home = () => {
    return(
        <>
        <h1>Home</h1>
        <main>
            {/* Form de búsqueda */}
            <FormBusqueda className="BuscadorHome" history={this.props.history}/>

            {/* 2 sections con 5 elementos */}
            {/* cada section con su filtro buscatos (se hace con el fetch) */}
            <PelisPopuGrid/>
            <PelisTopRatedGrid/>
            {/* AGREGAR PROPSSS */}
            
        </main>
        </>
    )
};

export default Home;