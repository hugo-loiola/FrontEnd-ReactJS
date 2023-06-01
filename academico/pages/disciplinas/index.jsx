import Pagina from "@/components/Pagina";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { AiOutlineDelete } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";

const index = () => {
  const [disciplinas, setDisciplinas] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    axios.get("/api/disciplinas").then((res) => {
      setDisciplinas(res.data);
    });
  }

  function excluir(id) {
    if (confirm("Are you sure you want to ?")) {
      axios.delete(`/api/disciplinas/${id}`);
      getAll();
    }
  }

  return (
    <Pagina titulo="Disciplinas">
      <Link href={"/disciplinas/form"} className="btn btn-primary mb-2">
        Novo
      </Link>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Curso</th>
          </tr>
        </thead>
        <tbody>
          {disciplinas.map((item) => (
            <tr key={item.id}>
              <td>
                <Link href={`/disciplinas/${item.id}`}>
                  <BsFillPencilFill className="me-2 text-primary" />
                </Link>
                <AiOutlineDelete
                  onClick={() => excluir(item.id)}
                  className="text-danger"
                />
              </td>
              <td>{item.nome}</td>
              <td>{item.curso}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
};

export default index;
