import Pagina from "@/components/Pagina";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BsArrowLeftCircleFill, BsCheck2 } from "react-icons/bs";

const form = () => {
  const { push, query } = useRouter();
  const { register, handleSubmit, setValue } = useForm();
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    if (query.id) {
      axios.get(`/api/disciplinas/${query.id}`).then((res) => {
        const disciplina = res.data;

        for (let atributo in disciplina) {
          setValue(atributo, disciplina[atributo]);
        }
      });
      axios.get("/api/cursos").then((res) => {
        setCursos(res.data);
      });
    }
  }, [query.id]);

  function salvar(dados) {
    axios.put(`/api/disciplinas/${dados.id}`, dados);
    push("/disciplinas");
  }

  return (
    <Pagina titulo="Disciplina">
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control type="text" {...register("nome")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="curso">
          <Form.Label>Curso: </Form.Label>
          <Form.Select {...register("curso")}>
            {cursos.map((item) => (
              <option value={item.nome} key={item.id}>
                {item.nome}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <div className="text-center">
          <Button variant="success" onClick={handleSubmit(salvar)}>
            <BsCheck2 className="me-1" />
            Salvar
          </Button>
          <Link href={"/disciplinas"} className="ms-2 btn btn-danger">
            <BsArrowLeftCircleFill className="me-1" />
            Voltar
          </Link>
        </div>
      </Form>
    </Pagina>
  );
};

export default form;
