import React from "react";
import Pagina from "../../../components/Pagina";
import apiFilmes from "../../../services/apiFilmes";
import FilmesLista from "../../../components/filmes/FilmesLista";

const index = ({ filmes }) => {
  return (
    <Pagina titulo="Filmes">
      <FilmesLista filmes={filmes} />
    </Pagina>
  );
};

export default index;

export async function getServerSideProps(context) {
  const resultado = await apiFilmes.get(`/movie/popular/?language=pt-BR`);
  const filmes = await resultado.data.results;
  return {
    props: { filmes }, // will be passed to the page component as props
  };
}
