import React from "react";
import Pagina from "../../../components/Pagina";
import apiFilmes from "../../../services/apiFilmes";
import SeriesLista from "../../../components/series/SeriesLista";

const index = ({ series }) => {
  return (
    <Pagina>
      <SeriesLista series={series} />
    </Pagina>
  );
};

export default index;
export async function getServerSideProps(context) {
  const resultado = await apiFilmes.get(`/tv/top_rated/?language=pt-BR`);
  const series = await resultado.data.results;
  return {
    props: { series }, // will be passed to the page component as props
  };
}
