import Pagina from "@/components/Pagina";
import apiDeputados from "@/services/apiDeputados";
import Link from "next/link";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const index = ({ deputados }) => {
  return (
    <Pagina titulo="Deputados">
      <Row>
        {deputados.dados.map((item) => (
          <Col key={item.id} className="my-3">
            <Link href={`deputados/${item.id}`}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={item.urlFoto} />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Pagina>
  );
};

export default index;
export async function getServerSideProps(context) {
  const resultado = await apiDeputados.get(`/deputados`);
  const deputados = await resultado.data;
  return {
    props: { deputados }, // will be passed to the page component as props
  };
}
