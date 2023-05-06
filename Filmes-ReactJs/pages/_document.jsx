import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous"
      />
      <title>Filmes do Hugo</title>
      <link
        rel="icon"
        href="https://cdn-icons-png.flaticon.com/512/3658/3658959.png"
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
