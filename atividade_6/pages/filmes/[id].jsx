import React from "react";
import Pagina from "../../components/Pagina";
import apiFilmes from "../../services/apiFilmes";
import FilmeDetalhes from "../../components/filmes/FilmeDetalhes";

const index = ({ filme, generos, produtoras, atores }) => {
  return (
    <Pagina titulo={filme.title}>
      <FilmeDetalhes
        filme={filme}
        atores={atores}
        generos={generos}
        produtoras={produtoras}
      />
    </Pagina>
  );
};

export default index;

export async function getServerSideProps(context) {
  const id = context.params.id;

  const resultado = await apiFilmes.get(`/movie/${id}?language=pt-BR`);
  const res = await apiFilmes.get(`/movie/${id}/credits?language=pt-BR`);

  const filme = await resultado.data;
  const generos = await filme.genres;
  const produtoras = await filme.production_companies;
  const atores = await res.data.cast;
  return {
    props: { filme, generos, produtoras, atores }, // will be passed to the page component as props
  };
}
