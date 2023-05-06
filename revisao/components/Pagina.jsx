import React from "react";
import Cabecalho from "./Cabecalho";
import { Container } from "react-bootstrap";

const Pagina = (props) => {
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <Cabecalho />
      <div className="py-3 text-white text-center mb-3 bg-secondary">
        <Container>
          <h1>{props.titulo}</h1>
        </Container>
      </div>
      <Container className="mb-5 pb-3">{props.children}</Container>

      <div
        style={{
          width: "100%",
        }}
        className=" position-static bottom-0 py-3 text-white text-center bg-secondary "
      >
        <p>
          Todos os direitos reservados® Feito por{" "}
          <a
            href="https://github.com/hugo-loiola"
            style={{ textDecoration: "none", color: "#000" }}
          >
            Hugo
          </a>
        </p>
      </div>
    </div>
  );
};

export default Pagina;
