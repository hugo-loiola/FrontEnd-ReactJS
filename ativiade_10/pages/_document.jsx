import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <title>Acadêmico</title>
      <link
        rel="icon"
        href="https://e7.pngegg.com/pngimages/326/401/png-clipart-graduation-ceremony-square-academic-cap-computer-icons-academic-degree-cap-blue-angle.png"
      />
      <body className="bg-black text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
