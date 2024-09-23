// import { Component } from "react";
import DetalleCard from "../components/DetalleCard/DetalleCard";

const DetallePelicula = (props) => {

  return (
    <section className="pelis">
      <DetalleCard id={props.match.params.id} />
    </section>
  )
};

// class DetallePelicula extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
      
//     }
//   }

//   render() {
//     return (
//       <section className="pelis">
//         <DetalleCard id={this.props.match.params.id} />   
//       </section>
//     );
//   }
// }

export default DetallePelicula;