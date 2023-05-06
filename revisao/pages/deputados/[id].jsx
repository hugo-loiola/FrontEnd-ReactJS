import Pagina from "@/components/Pagina";
import apiDeputados from "@/services/apiDeputados";
import Link from "next/link";
import React from "react";
import { Card, Col, Row, Table } from "react-bootstrap";

const index = ({ deputado, despesas, profissoes }) => {
  return (
    <Pagina titulo={deputado.id}>
      <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src={deputado.ultimoStatus.urlFoto} />
            <Card.Body>
              <Card.Title>
                <strong>{deputado.ultimoStatus.nome}</strong>
              </Card.Title>
              <Card.Text>
                Partido: {deputado.ultimoStatus.siglaPartido}
                <br />
                UF Partido: {deputado.ultimoStatus.siglaUf}
              </Card.Text>
            </Card.Body>
          </Card>

          <Link href={`/deputados`} className="btn btn-danger my-3">
            Voltar
          </Link>
        </Col>

        <Col md={6}>
          <h2>Despesas</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Data</th>
                <th>Descrição</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              {despesas.map((item) => (
                <tr>
                  <td>{new Date(item.dataDocumento).toLocaleDateString()}</td>
                  <td>{item.tipoDespesa}</td>
                  <td>R${item.valorLiquido.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        <Col>
          <h2>Profissões {profissoes.length}</h2>
          <ul>
            {profissoes.map((item) => (
              <li>{item.titulo}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </Pagina>
  );
};

export default index;
export async function getServerSideProps(context) {
  const id = context.params.id;

  const resultado = await apiDeputados.get(`/deputados/${id}`);
  const deputado = await resultado.data.dados;

  const resDespesas = await apiDeputados.get(`/deputados/${id}/despesas`);
  const despesas = await resDespesas.data.dados;

  const resProfissoes = await apiDeputados.get(`/deputados/${id}/profissoes`);
  const profissoes = await resProfissoes.data.dados;
  return {
    props: { deputado, despesas, profissoes }, // will be passed to the page component as props
  };
}
