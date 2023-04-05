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
          {carros.map((carro, index) => (
            <p key={index}>{carro}</p>
          ))}
        </Container>
      </Pagina>
    </>
  );
};

export default array;
