import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import { Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import PeliculasTopRated from './components/PeliculasTopRated/PeliculasTopRated';
// importar componentes: ver rutas


function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/toprated" component={PeliculasTopRated}/>
        {/* <Route path="/favoritos" component={Favoritos}/>
        <Route path="/populares" component={PeliculasPopulares}/>
        <Route path="/detallePelicula" component={DetallePelicula} /> */}
      
      </Switch>
      {/* <p>Volvio el muñeco!!</p> */}
      <Footer />
    </>
  );
}

export default App;
