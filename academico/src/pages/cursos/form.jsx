import Pagina from "@/components/Pagina";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { MdKeyboardBackspace, MdOutlineCheck } from "react-icons/md";

const form = () => {
  const { push } = useRouter();
  const { register, handleSubmit } = useForm();

  function salvar(dados) {
    const cursos = JSON.parse(window.localStorage.getItem("cursos")) || [];
    cursos.push(dados);
    window.localStorage.setItem("cursos", JSON.stringify(cursos));
    push("/cursos");
  }

  return (
    <Pagina titulo="Curso">
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control type="text" {...register("nome")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="duracao">
          <Form.Label>Duração: </Form.Label>
          <Form.Control type="text" {...register("duracao")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="modalidade">
          <Form.Label>Modalidade: </Form.Label>
          <Form.Control type="text" {...register("modalidade")} />
        </Form.Group>
        <div className="text-center ">
          <Button variant="success" onClick={handleSubmit(salvar)}>
            <MdOutlineCheck className="mx-1" />
            Salvar
          </Button>
          <Link href={"/cursos"} className="mx-3 btn btn-light">
            <MdKeyboardBackspace className="mx-1" />
            Voltar
          </Link>
        </div>
      </Form>
    </Pagina>
  );
};

export default form;