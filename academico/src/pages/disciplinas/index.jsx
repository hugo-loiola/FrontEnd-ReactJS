import Pagina from "@/components/Pagina";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import {
  MdRestoreFromTrash,
  MdEdit,
  MdOutlinePersonAddAlt,
} from "react-icons/md";

const index = ({ disciplinas }) => {
  useEffect(() => {}, []);

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
            <th>Curso</th>
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
              <td>{item.curso}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
};

export default index;
export async function getServerSideProps(context) {
  const resultado = await axios.get(`/api/disciplinas`);
  const disciplinas = await resultado.data;
  return {
    props: { disciplinas }, // will be passed to the page component as props
  };
}
