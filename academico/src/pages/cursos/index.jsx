import Pagina from "@/components/Pagina";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button, FormGroup, Table } from "react-bootstrap";
import { AiOutlineDelete } from "react-icons/ai";

const index = () => {
  const [cursos, setCursos] = useState([]);
  useEffect(() => {
    setCursos(JSON.parse(window.localStorage.getItem("cursos")) || []);
  }, []);
  console.log(cursos);
  return (
    <Pagina titulo="Cursos">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Del</th>
            <th>NOME</th>
            <th>Telefone</th>
            <th>Email</th>
            <th>Curso</th>
            <th>Modalidade</th>
          </tr>
        </thead>
        <tbody>
          {cursos.map((item, i) => (
            <tr>
              <td>{i}</td>
              <td>
                <AiOutlineDelete className="text-danger" />
              </td>
              <td>{item.nome}</td>
              <td>{item.Numero}</td>
              <td>{item.Email}</td>
              <td>{item.Curso}</td>
              <td>{item.Modadelida}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <br></br>
      <Button href="/cursos/form" variant="primary">
        Inscreva-se
      </Button>{" "}
    </Pagina>
  );
};

export default index;
