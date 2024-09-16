import Footer from './components/Footer/Footer';
import FormBusqueda from './components/FormBusqueda/FormBusqueda';
import Header from './components/Header/Header'
import {Route,Switch} from "react-router-dom";
import Home from "./pages/Home/Home"


function App() {
  return (
    <>
    
      <Header></Header>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/NowPlayingVista" component={Home}/>
      </Switch>

      <p>Volvio el muñeco!!</p>
      <FormBusqueda/>
      <Footer></Footer>
    </>
  );
}

export default App;
