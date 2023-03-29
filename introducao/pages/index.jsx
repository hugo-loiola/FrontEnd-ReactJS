import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cabecalho from "../components/Cabecalho";
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
    <div className='container text-center '>
      <Cabecalho />
      <h1 >Hello World</h1>
      <Button variant="primary">Primary</Button>
    </div>
  );
};

export default Home;
