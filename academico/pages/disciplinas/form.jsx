import Pagina from "@/components/Pagina";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BsArrowLeftCircleFill, BsCheck2 } from "react-icons/bs";

const form = () => {
  const { push } = useRouter();
  const { register, handleSubmit } = useForm();

  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    axios.get("/api/cursos").then((res) => {
      setCursos(res.data);
    });
  }

  function salvar(dados) {
    axios.post("/api/disciplinas", dados);
    push("/disciplinas");
  }

  return (
    <Pagina titulo="Disciplina">
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="nome">
            <Form.Label>Nome: </Form.Label>
            <Form.Control
              type="text"
              {...register("nome", { required: true, maxLength: 50 })}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="curso">
            <Form.Label>Curso: </Form.Label>
            <Form.Select {...register("curso", { required: true })}>
              {cursos.map((item) => (
                <option value={item.nome} key={item.id}>
                  {item.nome}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Row>

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
