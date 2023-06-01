import Pagina from "@/components/Pagina";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { MdKeyboardBackspace, MdOutlineCheck } from "react-icons/md";

const form = () => {
  const { push, query } = useRouter();
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    if (query.id) {
      axios.get(`/api/disciplinas/${query.id}`).then((res) => {
        const disciplina = res.data;

        for (let atributo in disciplina) {
          setValue(atributo, disciplina[atributo]);
        }
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
          <Form.Label>Curso </Form.Label>
          <Form.Control type="text" {...register("curso")} />
        </Form.Group>
        <div className="text-center ">
          <Button variant="success" onClick={handleSubmit(salvar)}>
            <MdOutlineCheck className="mx-1" />
            Salvar
          </Button>
          <Link href={"/disciplinas"} className="mx-3 btn btn-light">
            <MdKeyboardBackspace className="mx-1" />
            Voltar
          </Link>
        </div>
      </Form>
    </Pagina>
  );
};

export default form;
