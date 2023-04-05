import React from "react";
import Pagina from "../components/Pagina";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

const objeto = () => {
  const carros = [
    {
      marca: "Honda",
      modelo: "Civic",
      ano: 2015,
      cor: "branco",
      foto: "",
    },
    {
      marca: "Hyundai",
      modelo: "Tucson",
      ano: 2012,
      cor: "prata",
      foto: "",
    },
    {
      marca: "Chevrolet",
      modelo: "Celta",
      ano: 2002,
      cor: "vermelho",
      foto: "",
    },
    {
      marca: "Fiat",
      modelo: "Tempra",
      ano: 2000,
      cor: "vinho",
      foto: "",
    },
    {
      marca: "Fiat",
      modelo: "Marea",
      ano: 2001,
      cor: "prata",
      foto: "",
    },
    {
      marca: "Fiat",
      modelo: "Doblo",
      ano: 2010,
      cor: "branco",
      foto: "",
    },
  ];
  return (
    <Pagina titulo="Objetos">
      <Container>
        {carros.map((carro) => (
          <div>
            <h2>
              {carro.marca} - {carro.modelo}
            </h2>
            <p>Ano: {carro.ano}</p>
            <p>Cor: {carro.cor}</p>
          </div>
        ))}
      </Container>
    </Pagina>
  );
};

export default objeto;
