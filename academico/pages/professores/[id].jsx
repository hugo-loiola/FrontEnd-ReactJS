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
      axios.get(`/api/professores/${query.id}`).then((res) => {
        const professor = res.data;

        for (let atributo in professor) {
          setValue(professor, professor[atributo]);
        }
      });
    }
  }, [query.id]);

  function salvar(dados) {
    axios.put(`/api/professores/${dados.id}`, dados);
    push("/professores");
  }

  return (
    <Pagina titulo="Professor">
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control type="text" {...register("nome")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="cpf">
          <Form.Label>CPF: </Form.Label>
          <Form.Control type="text" {...register("cpf")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="matricula">
          <Form.Label>Matricula: </Form.Label>
          <Form.Control type="text" {...register("matricula")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="salario">
          <Form.Label>Salario: </Form.Label>
          <Form.Control type="text" {...register("salario")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email: </Form.Label>
          <Form.Control type="email" {...register("email")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="telefone">
          <Form.Label>Telefone: </Form.Label>
          <Form.Control type="tel" {...register("telefone")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="cep">
          <Form.Label>CEP: </Form.Label>
          <Form.Control type="text" {...register("cep")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="logradouro">
          <Form.Label>Logradouro: </Form.Label>
          <Form.Control type="text" {...register("logradouro")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="complemento">
          <Form.Label>Complemento: </Form.Label>
          <Form.Control type="text" {...register("complemento")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="numero">
          <Form.Label>Numero: </Form.Label>
          <Form.Control type="number" {...register("numero")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="bairro">
          <Form.Label>Bairro: </Form.Label>
          <Form.Control type="text" {...register("bairro")} />
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