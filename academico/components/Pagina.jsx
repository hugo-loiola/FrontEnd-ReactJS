import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container } from "react-bootstrap";
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";

const Pagina = (props) => {
  return (
    <div>
      <Cabecalho />
      <div className="bg-secondary py-3 text-white text-center mb-3">
        <Container>
          <h1>{props.titulo}</h1>
        </Container>
      </div>

      <Container className="mb-5 pb-4 ">{props.children}</Container>

      <Rodape />
    </div>
  );
};

export default Pagina;
