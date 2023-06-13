import Pagina from "@/components/Pagina";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BsArrowLeftCircleFill, BsCheck2 } from "react-icons/bs";

const form = () => {
  const { push } = useRouter();
  const { register, handleSubmit } = useForm();

  function salvar(dados) {
    axios.post("/api/semestres", dados);
    push("/semestres");
  }

  return (
    <Pagina titulo="Semestre">
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control
            type="text"
            {...register("nome", { required: true, maxLength: 50 })}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="dataInicio">
            <Form.Label>Data de Início: </Form.Label>
            <Form.Control
              type="date"
              {...register("dataInicio", { required: true })}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="dataFim">
            <Form.Label>Data Final: </Form.Label>
            <Form.Control
              type="date"
              {...register("dataFim", { required: true })}
            />
          </Form.Group>
        </Row>

        <div className="text-center">
          <Button variant="success" onClick={handleSubmit(salvar)}>
            <BsCheck2 className="me-1" />
            Salvar
          </Button>
          <Link href={"/semestres"} className="ms-2 btn btn-danger">
            <BsArrowLeftCircleFill className="me-1" />
            Voltar
          </Link>
        </div>
      </Form>
    </Pagina>
  );
};

export default form;
