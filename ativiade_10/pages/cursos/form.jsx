import Pagina from "@/components/Pagina";
import cursoValidator from "@/validators/cursosValidators";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
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
    axios.post("/api/cursos", dados);
    push("/cursos");
  }

  return (
    <Pagina titulo="Cursos">
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="nome">
            <Form.Label>Nome: </Form.Label>
            <Form.Control
              type="text"
              {...register("nome", cursoValidator.nome)}
            />
            {errors.nome && (
              <small className="text-danger">{errors.nome.message}</small>
            )}
          </Form.Group>
          <Form.Group as={Col} controlId="duracao">
            <Form.Label>Duração: </Form.Label>
            <Form.Control
              type="number"
              {...register("duracao", cursoValidator.duracao)}
            />
            {errors.duracao && (
              <small className="text-danger">{errors.duracao.message}</small>
            )}
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="modalidade">
          <Form.Label>Modalidade: </Form.Label>
          <Form.Control
            type="text"
            {...register("modalidade", cursoValidator.modalidade)}
          />
          {errors.modalidade && (
            <small className="text-danger">{errors.modalidade.message}</small>
          )}
        </Form.Group>

        <div className="text-center">
          <Button variant="success" onClick={handleSubmit(salvar)}>
            <BsCheck2 className="me-1" />
            Salvar
          </Button>
          <Link href={"/cursos"} className="ms-2 btn btn-danger">
            <BsArrowLeftCircleFill className="me-1" />
            Voltar
          </Link>
        </div>
      </Form>
    </Pagina>
  );
};

export default form;
