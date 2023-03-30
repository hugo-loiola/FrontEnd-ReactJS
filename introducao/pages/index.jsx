import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cabecalho from "../components/Cabecalho";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";

const Home = () => {
  return (
    <div>

      <Cabecalho />
      <div className='bg-secondary py-3 text-white text-center mb-3'>
        <Container >
          <h1>Página Inicial</h1>
        </Container>
      </div>
      <h1>Hello World!</h1>

    </div>
  );
};

export default Home;
