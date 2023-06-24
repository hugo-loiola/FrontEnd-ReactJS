import React from "react";
import Pagina from "../../components/Pagina";
import apiFilmes from "../../services/apiFilmes";
import SerieDetalhes from "../../components/series/SerieDetalhes";

const index = ({ serie, atores }) => {
  return (
    <Pagina titulo={serie.name}>
      <SerieDetalhes serie={serie} atores={atores} />
    </Pagina>
  );
};

export default index;

export async function getServerSideProps(context) {
  const id = context.params.id;

  const resultado = await apiFilmes.get(`/tv/${id}?language=pt-BR`);
  const res = await apiFilmes.get(`/tv/${id}/credits?language=pt-BR`);

  const serie = await resultado.data;
  const generos = await serie.genres;
  const produtoras = await serie.production_companies;
  const atores = await res.data.cast;
  return {
    props: { serie, generos, produtoras, atores }, // will be passed to the page component as props
  };
}
