import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagina from "../components/Pagina";
import Container from "react-bootstrap/Container";

const Home = () => {
  return (
    <>
      <Pagina titulo="Página Inicial">
        <Container>
          <h2>Hello World</h2>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </Container>
      </Pagina>
    </>
  );
};

export default Home;
