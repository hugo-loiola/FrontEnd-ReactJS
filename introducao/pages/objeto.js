import React from "react";
import Pagina from "../components/Pagina";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

const objeto = () => {
  const carros = [
    {
      marca: "Honda",
      modelo: "Civic",
      ano: 2015,
      cor: "branco",
      foto: "https://carrosdointerior.com.br/dist/img/anuncio/f54b4b2cc5b8be95df3779cf936671c8.jpg",
    },
    {
      marca: "Hyundai",
      modelo: "Tucson",
      ano: 2012,
      cor: "prata",
      foto: "https://img2.icarros.com/dbimg/galeriaimgmodelo/2/296_1.jpg",
    },
    {
      marca: "Chevrolet",
      modelo: "Celta",
      ano: 2002,
      cor: "vermelho",
      foto: "https://cdn.grupolance.com.br/batches/8f/19257/72cff3911efd5e4120d2c065122fc47d.jpg",
    },
    {
      marca: "Fiat",
      modelo: "Tempra",
      ano: 2000,
      cor: "vinho",
      foto: "https://upload.wikimedia.org/wikipedia/commons/0/06/Fiat_Tempra_berlina.jpg",
    },
    {
      marca: "Fiat",
      modelo: "Marea",
      ano: 2001,
      cor: "prata",
      foto: "https://uploads.vrum.com.br/2022/11/c246568a-fiat-marea-2.0-modelo-2001-prata-de-frente-no-estudio.jpg",
    },
    {
      marca: "Fiat",
      modelo: "Doblo",
      ano: 2010,
      cor: "branco",
      foto: "https://img1.icarros.com/dbimg/imgmodelo/4/1103_5.jpg",
    },
  ];
  return (
    <Pagina titulo="Objetos">
      <Container>
        {carros.map((carro) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={carro.foto} />
            <Card.Body>
              <Card.Title>{carro.modelo}</Card.Title>
              <Card.Text>
                Ano: {carro.ano}
                <br />
                Mara: {carro.marca}
                <br />
                Cor: {carro.cor}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </Pagina>
  );
};

export default objeto;
