import Pagina from "@/components/Pagina";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BsArrowLeftCircleFill, BsCheck2 } from "react-icons/bs";

const form = () => {
  const { push } = useRouter();
  const { register, handleSubmit } = useForm();

  function salvar(dados) {
    axios.post("/api/salas", dados);
    push("/salas");
  }

  return (
    <Pagina titulo="Sala">
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control type="text" {...register("nome")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="capacidade">
          <Form.Label>Capacidade </Form.Label>
          <Form.Control type="number" {...register("capacidade")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="tipo">
          <Form.Label>Tipo: </Form.Label>
          <Form.Control type="number" {...register("tipo")} />
        </Form.Group>

        <div className="text-center">
          <Button variant="success" onClick={handleSubmit(salvar)}>
            <BsCheck2 className="me-1" />
            Salvar
          </Button>
          <Link href={"/salas"} className="ms-2 btn btn-danger">
            <BsArrowLeftCircleFill className="me-1" />
            Voltar
          </Link>
        </div>
      </Form>
    </Pagina>
  );
};

export default form;
