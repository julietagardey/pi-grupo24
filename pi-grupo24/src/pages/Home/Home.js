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
            <PelisPopuGrid/>
            <PelisTopRatedGrid/>
            
        </main>
        </>
    )
};

export default Home;