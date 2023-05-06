import React from "react";
import Pagina from "../../components/Pagina";
import apiFilmes from "../../services/apiFilmes";
import Ator from "../../components/ator/Ator";

const index = ({ ator, imagens, filmes, series }) => {
  return (
    <Pagina titulo={ator.name}>
      <Ator ator={ator} imagens={imagens} filmes={filmes} series={series} />
    </Pagina>
  );
};

export default index;
export async function getServerSideProps(context) {
  const id = context.params.id;
  // Atores
  const resultado = await apiFilmes.get(`/person/${id}?language=pt-BR`);
  const ator = await resultado.data;
  // Imagens
  const resImagens = await apiFilmes.get(`/person/${id}/images`);
  const imagens = await resImagens.data;
  // Filmes
  const resFilmes = await apiFilmes.get(
    `/person/${id}/movie_credits?language=pt-BR`
  );
  const filmes = await resFilmes.data;
  // Series
  const resSeries = await apiFilmes.get(`/person/${id}/tv_credits`);
  const series = await resSeries.data;
  return {
    props: { ator, imagens, filmes, series }, // will be passed to the page component as props
  };
}
