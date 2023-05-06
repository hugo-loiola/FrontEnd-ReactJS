import Link from "next/link";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const FilmeDetalhes = ({ filme, atores, generos, produtoras }) => {
  const image_path = "https://image.tmdb.org/t/p/w500/";
  return (
    <div>
      {" "}
      <Row>
        <Col md={3}>
          <Card style={{ backgroundColor: "#BA19FF" }}>
            <Card.Img
              variant="top"
              src={`${image_path}${filme.poster_path}`}
              alt={filme.title}
              style={{
                border: "1px solid #BA19FF",
                borderRadius: "15px",
              }}
            />
          </Card>
        </Col>
        <Col
          md={9}
          className="text-start text-white p-3 "
          style={{
            backgroundColor: "#BA19FF",
            border: "1px solid #BA19FF",
            borderRadius: "10px 50px",
          }}
        >
          <p>Orçamento: ${filme.budget.toFixed(2)}</p>
          <p>Faturamento: ${filme.revenue.toFixed(2)}</p>
          <p>Lançamento: {new Date(filme.release_date).toLocaleDateString()}</p>
          <p>Popularidade: {filme.popularity.toFixed(2)}</p>
          <p>Duração: {filme.runtime} minutos</p>
          <p>Generos:</p>
          <div>
            <ul>
              {generos.map((genero) => (
                <li key={genero.id}>{genero.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <p>Produtoras:</p>
            <ul>
              {produtoras.map((produtora) => (
                <li key={produtora.id}>{produtora.name}</li>
              ))}
            </ul>
            <p>
              Sinopse: <br />
              {filme.overview}
            </p>
          </div>
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
              <Card>
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

export default FilmeDetalhes;
