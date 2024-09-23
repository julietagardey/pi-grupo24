// import { Component } from "react";
import DetalleCard from "../components/DetalleCard/DetalleCard";

const DetallePelicula = ({ match }) => {
  const { id } = match.params;
  console.log(id)

  return (
    <section className="pelis">
      <DetalleCard id={id} />
    </section>
  )
};

// class DetallePelicula extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       pelicula: {},
//       // filmInfo: null,
//       // id: this.props.match.params.id
//     }
//   }

//   render() {
//     return (
//       <section className="pelis">
//         <DetalleCard match={this.props.match} />      
//       </section>
//     );
//   }
// }

export default DetallePelicula;