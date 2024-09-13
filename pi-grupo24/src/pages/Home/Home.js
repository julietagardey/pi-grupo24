import PelisPopuGrid from "../../components/PelisPopuGrid/PelisPopuGrid";
import PelisTopRatedGrid from "../../components/PelisTopRatedGrid/PelisTopRatedGrid";

const Home = () => {
    return(
        <>
        <h1>Home</h1>
        <main>
            {/* Form de búsqueda */}
            {/* <FormBusqueda /> */}

            {/* 2 sections con 5 elementos */}
            <PelisPopuGrid/>
            <PelisTopRatedGrid/>
            
        </main>
        </>
    )
};

export default Home;