import React, { Component } from "react";
import "../FormBusqueda/FormBusqueda"

class FormBusqueda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
  }

  handleCancelSubmit(e) {
    e.preventDefault()
  }

  handleFormChange(e){
    this.setState({
      query: e.target.value,
    });
  }

  handleFormSubmit(){
    this.props.history.push("/search", {query: this.state.query})
  }

  render() {
    return (
      <section className="hija-buscador">
        <form onSubmit={(e) => this.handleCancelSubmit(e)}>
          <div className="barra-busc">
          <input
            className="search-input"
            type="text"
            name="query"
            onChange={(e) => this.handleFormChange(e)}
            value={this.state.query}
            placeholder="Buscar..."
          />
          <button onClick={() => this.handleFormSubmit()}>Buscar</button>
          </div>
          {/* <i class="fas fa-search search-icon" onClick={() => this.handleFormSubmit()}></i> */}
        </form>
      </section>
    )
  }
}


export default FormBusqueda;