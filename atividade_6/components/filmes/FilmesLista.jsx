import Link from "next/link";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";

function FilmesPopulares({ filmes }) {
  const image_path = "https://image.tmdb.org/t/p/w500/";
  return (
    <div>
      <Row>
        {filmes.map((item) => (
          <Col key={item.id} md={3} className="my-3">
            <Card>
              <Card.Img
                variant="top"
                src={`${image_path}${item.poster_path}`}
                alt={item.title}
              />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  Lançamento-
                  <strong>
                    {new Date(item.release_date).toLocaleDateString()}
                  </strong>
                  <br />
                  Nota-<strong>{item.vote_average}</strong>
                </Card.Text>

                <Link
                  href={`/filmes/${item.id}`}
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
    </div>
  );
}

export default FilmesPopulares;
