const alunoValidator = {
  nome: {
    required: "O campo é obrigatório",
    minLength: {
      value: 3,
      message: "A quantidade de caracteres mínima é 3",
    },
    maxLength: {
      value: 50,
      message: "A quantidade de caracteres máxima é 50",
    },
  },
  cpf: {
    required: "O campo é obrigatório",
    pattern: {
      value: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
      message: "O CPF está incorreto",
    },
  },
  matricula: {
    required: "O campo é obrigatório",
    minLength: {
      value: 3,
      message: "A quantidade de caracteres mínima é 3",
    },
    maxLength: {
      value: 50,
      message: "A quantidade de caracteres máxima é 50",
    },
  },
  email: {
    required: "O campo é obrigatório",
    pattern: {
      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      message: "Email incorreto",
    },
  },
  telefone: {
    required: "O campo é obrigatório",
    pattern: {
      value: /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/,
      message: "Telefone -> (xx) xxxxx-xxxx",
    },
  },
  cep: {
    required: "O campo é obrigatório",
    pattern: { value: /\d{5}-\d{3}/, message: "CEP incorreto" },
  },
  logradouro: {
    required: "O campo é obrigatório",
    minLength: {
      value: 3,
      message: "A quantidade de caracteres mínima é 3",
    },
    maxLength: {
      value: 50,
      message: "A quantidade de caracteres máxima é 50",
    },
  },
  complemento: {
    required: "O campo é obrigatório",
    minLength: {
      value: 3,
      message: "A quantidade de caracteres mínima é 3",
    },
    maxLength: {
      value: 50,
      message: "A quantidade de caracteres máxima é 50",
    },
  },
  numero: {
    required: "O campo é obrigatório",
    minLength: {
      value: 1,
      message: "A quantidade de caracteres mínima é 1",
    },
    maxLength: {
      value: 5,
      message: "A quantidade de caracteres máxima é 5",
    },
  },
  bairro: {
    required: "O campo é obrigatório",
    minLength: {
      value: 3,
      message: "A quantidade de caracteres mínima é 3",
    },
    maxLength: {
      value: 50,
      message: "A quantidade de caracteres máxima é 50",
    },
  },
};
export default alunoValidator;
