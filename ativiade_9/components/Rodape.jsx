import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Rodape = () => {
  return (
    <Container
      className="position-fixed bottom-0 text-white text-center py-1 bg-primary"
      fluid
    >
      <div>
        <p>TODOS DIREITOS RESERVADOS. FEITO POR</p>
        <a
          href="https://github.com/hugo-loiola"
          style={{ textDecoration: "none", color: "black" }}
        >
          HUGO
        </a>
      </div>
    </Container>
  );
};

export default Rodape;
