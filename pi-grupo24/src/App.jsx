import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import { Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import PeliculasTopRated from './pages/PeliculasTopRated';
import DetallePelicula from "./pages/DetallePelicula"
import NotFound from './components/NotFound/NotFound';
// importar componentes: ver rutas


function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/toprated" component={PeliculasTopRated}/>
        {/* <Route path="/favoritos" component={Favoritos}/> */}
        {/* <Route path="/populares" component={PeliculasPopulares}/> */}
        <Route path="/detallePelicula/:id" component={DetallePelicula} />
        <Route component={NotFound}/>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
