# ReactJS

### Criar um projeto

    npx create-next-app@latest nome-projeto

### Instalar as bibliotecas

    npm install npm install react-bootstrap bootstrap
    npm install axios
    npm install react-hook-form
    npm install react-icons --save
    npm install firebase
    npm install uuid

### Iniciar o projeto

    npm run dev

### Base do código

```jsx
import React from "react";

const index = () => {
  return <div>index</div>;
};

export default index;
```

> rafce

### Componentes

> pages/index.jsx

```jsx
import React from "react";
import Cabecalho from "../components/Cabecalho";

const Home = () => {
  return (
    <div>
      <Cabecalho />
    </div>
  );
};

export default Home;
```

---

> componentes/Cabecalho.jsx

```jsx
import React from "react";

const Cabecalho = () => {
  return <div>Cabeçalho</div>;
};

export default Cabecalho;
```

### Componentes com Props

- #### Componente pai

```jsx
const Pagina = (props) => {
  return (
    <>
      <Cabecalho />
      <div className="bg-secondary py-3 text-white text-center mb-3">
        <Container>
          <h1>{props.titulo}</h1>
        </Container>
      </div>

      {props.children}

      <div
        style={{ width: "100%" }}
        className="bg-secondary position-fixed bottom-0 py-3 text-white text-center"
      >
        <p>Todos os direitos reservados®</p>
      </div>
    </>
  );
};
```

- #### Componente filho

```jsx
const Home = () => {
  return (
    <>
      <Pagina titulo="Página Inicial">
        <Container>
          <h1>Hello World</h1>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </Container>
      </Pagina>
    </>
  );
};
```

### Map

```jsx
{
  carros.map((carro, index) => <p key={index}>{carro}</p>);
}
```

### getServerSideProps

> Substitui o uso do useEffect

```js
export async function getServerSideProps(context) {
  const resultado = await apiFilmes.get(
    `/movie/popular/?api_key=<<suachave>>&language=pt-BR`
  );
  const filmes = await resultado.data;
  return {
    props: { filmes }, // will be passed to the page component as props
  };
}
```
