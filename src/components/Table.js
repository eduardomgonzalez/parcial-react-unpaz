import React, { Component } from "react";
import "../css/Table.css";

class Table extends Component {
  render() {
    const { usuarios, usuariosFiltrados } = this.props;

    let datosUsuarios;

    /* Si es mayor a 0, renderizo el filtro */
    if (usuariosFiltrados.length > 0) {
      datosUsuarios = usuariosFiltrados.map((user) => {
        return (
          <tr key={user.id}>
            <td>{user.userId}</td>
            <td>{user.id}</td>
            <td>{user.title}</td>
            <td>{user.body}</td>
          </tr>
        );
      });
      /* Si es vacio muestro todos los usuarios */
    } else {
      datosUsuarios = usuarios.map((user) => {
        return (
          <tr key={user.id}>
            <td>{user.userId}</td>
            <td>{user.id}</td>
            <td>{user.title}</td>
            <td>{user.body}</td>
          </tr>
        );
      });
    }

    return (
      <div className="container tableComponent">
        <h2>Tabla</h2>
        <table className="table table-dark">
          <thead>
            <tr className="bg-danger">
              <th>User Id</th>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>{datosUsuarios}</tbody>
        </table>
      </div>
    );
  }
}

export default Table;
