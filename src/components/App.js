import React from "react";
import "../css/App.css";
import Header from "./Header";
import Filter from "./Filter";
import Table from "./Table";

class App extends React.Component {
  state = {
    usuarios: [],
    usuariosFiltrados: [],
  };

  handleChange = (e) => {
    let users = [...this.state.usuarios];
    let valor = parseInt(e.target.value);

    /* Filtro por userId */
    let us = users.filter((usuario) => {
      return usuario.userId === valor;
    });

    this.setState({
      usuariosFiltrados: us,
    });
  };

  handleClick = (e) => {
    this.setState({ usuariosFiltrados: [] });
  };

  componentDidMount() {
    this.apiUsers();
  }

  apiUsers = async () => {
    let url = `https://jsonplaceholder.typicode.com/posts`;
    try {
      const response = await fetch(url, { method: "GET" });
      const usuarios = await response.json();

      this.setState({
        usuarios: usuarios,
      });
    } catch (error) {
      alert(error);
    }
  };

  render() {
    //Recupero el estado
    const { usuarios, usuariosFiltrados } = this.state;

    return (
      <div className="App">
        <Header />

        <section className="filtros container">
          <Filter
            usuarios={usuarios}
            onChange={this.handleChange}
            categoria="userId"
          />
          <button className="btn btn-success" onClick={this.handleClick}>
            Mostrar todos los usuarios
          </button>
        </section>

        <Table usuarios={usuarios} usuariosFiltrados={usuariosFiltrados} />
      </div>
    );
  }
}

export default App;
