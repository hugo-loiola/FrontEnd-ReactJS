import Pagina from "@/components/Pagina";
import salaValidator from "@/validators/salasValidators";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BsArrowLeftCircleFill, BsCheck2 } from "react-icons/bs";

const form = () => {
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function salvar(dados) {
    axios.post("/api/salas", dados);
    push("/salas");
  }

  return (
    <Pagina titulo="Sala">
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control type="text" {...register("nome", salaValidator.nome)} />
          {errors.nome && (
            <small className="text-danger">{errors.nome.message}</small>
          )}
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="capacidade">
            <Form.Label>Capacidade </Form.Label>
            <Form.Control
              type="number"
              {...register("capacidade", salaValidator.capacidade)}
            />
            {errors.capacidade && (
              <small className="text-danger">{errors.capacidade.message}</small>
            )}
          </Form.Group>

          <Form.Group as={Col} controlId="tipo">
            <Form.Label>Tipo: </Form.Label>
            <Form.Control
              type="number"
              {...register("tipo", salaValidator.tipo)}
            />
            {errors.tipo && (
              <small className="text-danger">{errors.tipo.message}</small>
            )}
          </Form.Group>
        </Row>

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
