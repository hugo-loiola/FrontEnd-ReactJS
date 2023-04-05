import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagina from "../components/Pagina";
import Container from "react-bootstrap/Container";

const array = () => {
  const carros = ["Civic", "Tucson", "Celta", "Tempra", "Marea", "Doblo"];

  return (
    <>
      <Pagina titulo="Array">
        <Container>
          <h2>Lista Ordenada</h2>
          {carros.map((carro, index) => (
            <p key={index}>
              {index + 1}.{carro}
            </p>
          ))}
        </Container>
      </Pagina>
    </>
  );
};

export default array;
