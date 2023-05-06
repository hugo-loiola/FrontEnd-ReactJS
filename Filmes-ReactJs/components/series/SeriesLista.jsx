import Link from "next/link";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const SeriesPopulares = ({ series }) => {
  const image_path = "https://image.tmdb.org/t/p/w500/";
  return (
    <>
      {" "}
      <Row>
        {series.map((serie) => (
          <Col key={serie.id} md={3} className="my-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={`${image_path}${serie.poster_path}`}
                alt={serie.name}
              />
              <Card.Body>
                <Card.Title>{serie.name}</Card.Title>
                <Card.Text>
                  Estreia: {new Date(serie.first_air_date).toLocaleDateString()}
                  <br />
                  Popularidade: <strong>{serie.popularity.toFixed(2)}</strong>
                </Card.Text>

                <Link
                  href={`/series/${serie.id}`}
                  className="btn"
                  style={{ backgroundColor: "#9400d3", color: "#fff" }}
                >
                  Detalhes
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default SeriesPopulares;
