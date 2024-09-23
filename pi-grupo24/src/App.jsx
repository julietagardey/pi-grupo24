import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import { Switch, Route} from "react-router-dom";
// importar componentes: ver rutas
import Home from "./pages/Home";
import PeliculasTopRated from './pages/PeliculasTopRated';
import DetallePelicula from "./pages/DetallePelicula"
import NotFound from './components/NotFound/NotFound';
import Favoritos from './pages/Favoritos';
import ResultadoBusqueda from './pages/ResultadoBusqueda';
import PeliculasPopulares from "./pages/PeliculasPopulares";


function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/toprated" component={PeliculasTopRated}/>
        <Route path="/favoritos" component={Favoritos}/>
        <Route path="/populares" component={PeliculasPopulares}/>
        <Route path="/detallePelicula/:id" component={DetallePelicula} />
        <Route path="/search" component={ResultadoBusqueda} /> 
        <Route component={NotFound}/>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
