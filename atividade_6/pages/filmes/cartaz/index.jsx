import React from "react";
import FilmesLista from "../../../components/filmes/FilmesLista";
import apiFilmes from "../../../services/apiFilmes";
import Pagina from "../../../components/Pagina";

const index = ({ filmes }) => {
  return (
    <Pagina titulo="Filmes em Cartaz">
      <FilmesLista filmes={filmes} />
    </Pagina>
  );
};

export default index;
export async function getServerSideProps(context) {
  const resultado = await apiFilmes.get(`/movie/now_playing/?language=pt-BR`);
  const filmes = await resultado.data.results;
  return {
    props: { filmes }, // will be passed to the page component as props
  };
}
