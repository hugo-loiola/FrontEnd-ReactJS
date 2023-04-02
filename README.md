# ReactJS

### Criar um projeto

    npx create-next-app@latest nome-projeto

### Instalar o bootstrap

    npm install react-bootstrap bootstrap

### Axios para API

    npm i axios

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

- rafce

### Componentes

- pages/index.jsx

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

- componentes/Cabecalho.jsx

```jsx
import React from "react";

const Cabecalho = () => {
  return <div>Cabeçalho</div>;
};

export default Cabecalho;
```
