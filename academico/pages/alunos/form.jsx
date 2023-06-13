import Pagina from "@/components/Pagina";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BsArrowLeftCircleFill, BsCheck2 } from "react-icons/bs";

const form = () => {
  const { push } = useRouter();
  const { register, handleSubmit } = useForm();

  function salvar(dados) {
    axios.post("/api/alunos", dados);
    push("/alunos");
  }

  return (
    <Pagina titulo="Aluno">
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="nome">
            <Form.Label>Nome: </Form.Label>
            <Form.Control
              type="text"
              {...register("nome", { required: true, maxLength: 50 })}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="cpf">
            <Form.Label>CPF: </Form.Label>
            <Form.Control
              type="text"
              {...register("cpf", { required: true, maxLength: 20 })}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="matricula">
            <Form.Label>Matricula: </Form.Label>
            <Form.Control
              type="text"
              {...register("matricula", { required: true, maxLength: 20 })}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="email">
            <Form.Label>Email: </Form.Label>
            <Form.Control
              type="email"
              {...register("email", { maxLength: 100 })}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="telefone">
            <Form.Label>Telefone: </Form.Label>
            <Form.Control
              type="tel"
              {...register("telefone", { maxLength: 15 })}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="cep">
            <Form.Label>CEP: </Form.Label>
            <Form.Control type="text" {...register("cep", { maxLength: 11 })} />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="logradouro">
            <Form.Label>Logradouro: </Form.Label>
            <Form.Control
              type="text"
              {...register("logradouro", { maxLength: 100 })}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="complemento">
            <Form.Label>Complemento: </Form.Label>
            <Form.Control
              type="text"
              {...register("complemento", { maxLength: 100 })}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="numero">
            <Form.Label>Numero: </Form.Label>
            <Form.Control
              type="text"
              {...register("numero", { maxLength: 20 })}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="bairro">
            <Form.Label>Bairro: </Form.Label>
            <Form.Control
              type="text"
              {...register("bairro", { maxLength: 100 })}
            />
          </Form.Group>
        </Row>

        <div className="text-center">
          <Button variant="success" onClick={handleSubmit(salvar)}>
            <BsCheck2 className="me-1" />
            Salvar
          </Button>
          <Link href={"/alunos"} className="ms-2 btn btn-danger">
            <BsArrowLeftCircleFill className="me-1" />
            Voltar
          </Link>
        </div>
      </Form>
    </Pagina>
  );
};

export default form;
