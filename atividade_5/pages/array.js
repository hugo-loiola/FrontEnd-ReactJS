import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagina from "../components/Pagina";
import Container from "react-bootstrap/Container";

const array = () => {
  const carros = ["Civic", "Tucson", "Celta", "Tempra", "Marea", "Doblo"];

  return (
    <>
      <Pagina titulo="Array">
        <h2>Lista Ordenada</h2>
        <ol>
          {carros.map((carro, index) => (
            <li key={index}>{carro}</li>
          ))}
        </ol>
      </Pagina>
    </>
  );
};

export default array;
