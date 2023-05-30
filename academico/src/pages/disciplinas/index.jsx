import Pagina from "@/components/Pagina";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import {
  MdRestoreFromTrash,
  MdEdit,
  MdOutlinePersonAddAlt,
} from "react-icons/md";

const index = () => {
  const [disciplinas, setDisciplinas] = useState([]);

  useEffect(() => {}, []);

  function getAll() {
    return JSON.parse(window.localStorage.getItem("disciplinas") || []);
  }

  return (
    <Pagina titulo="Disciplinas">
      <Link href={"/disciplinas/form"} className="btn btn-primary mb-2">
        Novo <MdOutlinePersonAddAlt />
      </Link>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Nome</th>
            <th>Duração</th>
            <th>Modalidade</th>
          </tr>
        </thead>
        <tbody>
          {disciplinas.map((item, i) => (
            <tr className="text-center">
              <td>
                <Link href={`/disciplinas/${i}`}>
                  <MdEdit className="mx-2 text-primary" />
                </Link>
                <MdRestoreFromTrash
                  className="text-danger"
                  onClick={() => exlcuir(i)}
                />
              </td>

              <td>{item.nome}</td>
              <td>{item.duracao}</td>
              <td>{item.modalidade}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
};

export default index;
