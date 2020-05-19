import React from "react";
import "../css/Filter.css";

class Filter extends React.Component {
  render() {
    const { usuarios, onChange, categoria } = this.props;

    /* Primero MAPEO la lista de usuarios y obtengo un array con todas las categorias(userId)
    filtro para no tener repetidos
    Luego MAPEO nuevamente para rendeirzar cada elemento en un OPTION*/
    const valores = usuarios
      .map((elemento) => {
        return elemento[categoria];
      })
      .filter((categoria, indiceActual, array) => {
        // Sin repetidos
        return array.indexOf(categoria) === indiceActual;
      })
      .map((elemento, index) => {
        return (
          <option key={index} value={elemento}>
            {elemento}
          </option>
        );
      });

    return (
      <div className="container filter">
        <h4>Filtro por {categoria}:</h4>

        <select
          /* id="inputGroupSelect01" */
          onChange={onChange}
          className="custom-select"
        >
          <option value="seleccion">Seleccione un valor</option>
          {valores}
        </select>
      </div>
    );
  }
}

export default Filter;
