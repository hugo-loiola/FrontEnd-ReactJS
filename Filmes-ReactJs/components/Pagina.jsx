import React from "react";
import Cabecalho from "./Cabecalho";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";

const Pagina = (props) => {
  return (
    <div style={{ backgroundColor: "#5F0087" }}>
      <Cabecalho />
      <div
        className="py-3 text-white text-center mb-3"
        style={{ backgroundColor: "#5F0087" }}
      >
        <Container>
          <h1>{props.titulo}</h1>
        </Container>
      </div>
      <Container className="mb-5 pb-3">{props.children}</Container>

      <div
        style={{
          width: "100%",
          backgroundColor: "#9400d3",
        }}
        className=" position-static bottom-0 py-3 text-white text-center "
      >
        <p>
          Todos os direitos reservados® Feito por{" "}
          <a
            href="https://github.com/hugo-loiola"
            style={{ textDecoration: "none", color: "#9BD400" }}
          >
            Hugo
          </a>
        </p>
      </div>
    </div>
  );
};

export default Pagina;
