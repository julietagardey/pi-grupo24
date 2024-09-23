import { Component } from "react";
import DetalleCard from "../components/DetalleCard/DetalleCard";

// const DetallePelicula = ({ match }) => {
//   const { id } = match.params;
//   console.log(id)

//   return (
//     <DetalleCard id={id} />
//   )
// };

class DetallePelicula extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pelicula: {},
      // filmInfo: null,
      // id: this.props.match.params.id
    }
  }

  render() {
    return (
      <div>
        <DetalleCard match={this.props.match} />      
      </div>
    );
  }
}

export default DetallePelicula;