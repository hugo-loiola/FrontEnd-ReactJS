import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagina from "../components/Pagina";

const Home = () => {
  return (
    <Pagina titulo="Página Inicial">
      <h2 className="text-white">Olá visitante</h2>
    </Pagina>
  );
};

export default Home;
