// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { db } from "@/services/firebase";
import { child, get, ref, remove, set } from "firebase/database";
import { v4 } from "uuid";

export default function handler(req, res) {
  const id = req.query.id;

  if (req.method == "GET") {
    get(child(ref(db), "disciplinas")).then((snapshot) => {
      const retorno = [];
      snapshot.forEach((item) => {
        retorno.push(item.val());
      });

      res.status(200).json(retorno);
    });
  } else if (req.method == "POST") {
    const id = v4();

    const dados = req.body;

    dados.id = id;

    set(ref(db, "disciplinas/" + id), dados);

    res.status(200).json(dados);
  } else if (req.method == "PUT") {
    const id = v4();

    const dados = req.body;

    set(ref(db, `disciplinas/${id}`), dados);

    res.status(200).json(dados);
  } else if (req.method == "DELETE") {
    remove(ref(db, `disciplinas/${id}`));
    res.status(200).json(id);
  }
}
