import Pagina from "@/components/Pagina";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const form = () => {
  const { register, handleSubmit } = useForm();

  function salvar(dados) {
    const cursos = JSON.parse(window.localStorage.getItem("cursos")) || [];
    cursos.push(dados);
    window.localStorage.setItem("cursos", JSON.stringify(cursos));
    console.log(dados);
  }

  return (
    <Pagina titulo="Formulario">
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome:</Form.Label>
          <Form.Control type="text" {...register("nome")} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Numero">
          <Form.Label>Telefone:</Form.Label>
          <Form.Control type="number" {...register("Numero")} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Email">
          <Form.Label>Email address:</Form.Label>
          <Form.Control type="Email" {...register("Email")} />
        </Form.Group>
        <Form.Label>Curso:</Form.Label>
        <Form.Select {...register("Curso")} controlId="Curso">
          <option></option>
          <option>Culinaria</option>
          <option>Ciencia da Computacao</option>
          <option>Direito</option>
          <option>Educao Fisica</option>
          <option>Medicina</option>
          <option>Geografia</option>
        </Form.Select>
        <br></br>
        <Form.Label>Modalidade:</Form.Label>
        <Form.Select {...register("Modadelida")} controlId="Modalidade">
          <option></option>
          <option>EAD</option>
          <option>Presencial</option>
        </Form.Select>
        <br></br>
        <Button variant="primary" onClick={handleSubmit(salvar)}>
          salvar
        </Button>{" "}
        <Button variant="dark" href="/cursos">
          Volta
        </Button>
      </Form>
    </Pagina>
  );
};

export default form;
