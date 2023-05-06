import Link from "next/link";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const Ator = ({ ator, imagens, filmes, series }) => {
  const image_path = "https://image.tmdb.org/t/p/w500/";
  return (
    <div>
      {" "}
      <Row>
        <Col md={3}>
          <Card style={{ backgroundColor: "#BA19FF" }}>
            <Card.Img
              variant="top"
              src={`${image_path}${ator.profile_path}`}
              alt={ator.name}
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
          <p>
            Dia de Nascimento: {new Date(ator.birthday).toLocaleDateString()}
          </p>
          <p>Local de Nascimento: {ator.place_of_birth}</p>
          <p>Popularidade: {ator.popularity.toFixed(2)}</p>
          <div>
            <p>
              Biografia: <br />
              {ator.biography}
            </p>
          </div>
        </Col>
      </Row>
      <br />
      <h1 className="text-white">Imagens:</h1>
      <Row className="my-3">
        {imagens.profiles.map((item) => (
          <Col key={item.id} className="my-3">
            <Card style={{ width: "18rem" }}>
              {item.file_path ? (
                <Card.Img
                  variant="top"
                  src={`${image_path}${item.file_path}`}
                />
              ) : (
                <Card.Img
                  variant="top"
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6joxHCIoQ6AN5dRZZfsTOppciKBbLJJsi4Yi9Dew8&s"
                  }
                />
              )}
            </Card>
          </Col>
        ))}
      </Row>
      <h1 className="text-white">Filmes:</h1>
      <Row className="my-3">
        {filmes.cast.map((item) => (
          <Col key={item.id} className="my-3">
            <Link
              href={`../filmes/${item.id}`}
              style={{ textDecoration: "none" }}
              className="text-black"
            >
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  src={`${image_path}${item.poster_path}`}
                  variant="top"
                />
                <Card.Title className="p-2">{item.title}</Card.Title>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
      <h1 className="text-white">Series:</h1>
      <Row className="my-3">
        {series.cast.map((item) => (
          <Col key={item.id} className="my-3">
            <Link
              href={`../series/${item.id}`}
              style={{ textDecoration: "none" }}
              className="text-black"
            >
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  src={`${image_path}${item.poster_path}`}
                  variant="top"
                />
                <Card.Title className="p-2">{item.name}</Card.Title>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Ator;
