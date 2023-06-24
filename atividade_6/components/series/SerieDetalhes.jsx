import Link from "next/link";
import React from "react";
import { Card, Col, Row, Table } from "react-bootstrap";

const SerieDetalhe = ({ serie, atores }) => {
  const image_path = "https://image.tmdb.org/t/p/w500/";
  return (
    <div>
      <Row>
        <Col md={3}>
          <Card style={{ backgroundColor: "#BA19FF" }}>
            <Card.Img
              variant="top"
              src={`${image_path}${serie.poster_path}`}
              alt={serie.title}
              style={{
                border: "1px solid #BA19FF",
                borderRadius: "15px",
              }}
            />
          </Card>
        </Col>
        <Col
          md={9}
          className="text-start text-white p-3"
          style={{
            backgroundColor: "#BA19FF",
            border: "1px solid #BA19FF",
            borderRadius: "10px 50px",
          }}
        >
          Criado por:
          <ul>
            {serie.created_by.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
          Generos:
          <ul>
            {serie.genres.map((item) => (
              <li>{item.name}</li>
            ))}
          </ul>
          <p>Episódios: {serie.number_of_episodes}</p>
          <p>Temporadas: {serie.number_of_seasons}</p>
          <p>Dureação de Episódio: {serie.episode_run_time} minutos</p>
          <p>Sinopse:</p>
          {serie.overview}
        </Col>
      </Row>
      <Row className="py-5">
        <Col>
          <Table
            striped
            bordered
            hover
            variant="light"
            style={{ borderRadius: "15px" }}
          >
            <thead>
              <tr>
                <th className="text-center">Imagem</th>
                <th className="text-center">Temporada</th>
              </tr>
            </thead>
            {serie.seasons.map((item) => (
              <tbody key={item.id}>
                <tr>
                  <td>
                    <img
                      style={{ width: "150px" }}
                      src={`${image_path}${item.poster_path}`}
                    />
                  </td>
                  <td>{item.name}</td>
                </tr>
              </tbody>
            ))}
          </Table>
        </Col>
      </Row>
      <br />
      <h1 className="text-white">Atores</h1>
      <br />
      <Row>
        {atores.map((ator) => (
          <Col key={ator.id} md={3} className="my-3">
            <Link
              href={`../ator/${ator.id}`}
              style={{ textDecoration: "none" }}
              className="text-black"
            >
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={`${image_path}${ator.profile_path}`}
                />
                <Card.Title className="p-2">
                  <em>{ator.name}</em>
                </Card.Title>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SerieDetalhe;
