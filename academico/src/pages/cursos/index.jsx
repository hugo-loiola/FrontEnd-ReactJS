import Pagina from "@/components/Pagina";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { MdRestoreFromTrash } from "react-icons/md";

const index = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    setCursos(JSON.parse(window.localStorage.getItem("cursos")) || []);
  }, []);

  function getAll() {
    return JSON.parse(window.localStorage.getItem("cursos") || []);
  }

  function exlcuir(id) {
    if (confirm("Você tem certeza que quer excluir?")) {
      const cursos = getAll(id);
      cursos.splice(id, 1);
      window.localStorage.setItem("cursos", JSON.stringify(cursos));
      setCursos(cursos);
    }
  }

  return (
    <Pagina titulo="Cursos">
      <Link href={"/cursos/form"} className="btn btn-primary mb-2">
        Novo
      </Link>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Deletar</th>
            <th>Nome</th>
            <th>Duração</th>
            <th>Modalidade</th>
          </tr>
        </thead>
        <tbody>
          {cursos.map((item, i) => (
            <tr className="text-center">
              <td>{i}</td>
              <td>
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
