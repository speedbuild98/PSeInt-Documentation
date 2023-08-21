//Next
import Head from "next/head";
import Link from "next/link";

//Components
import { Layout, NavBar, Footer } from "~/components";

export default function Error() {
  
  return (
    <>
<Head>
  <title>PSeInt - Error 404</title>
  <meta name="description" content="Documentación de PSeInt" />
  <meta name="keywords" content="PSeInt, programación, código, programar, aprender, programacion, codigo" />
  <meta name="author" content="Lautaro Gallardo" />
  <link rel="icon" href="/favicon.svg" />
  <meta name="robots" content="index, follow" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
  <meta property="og:title" content="PSeInt - A programar se aprender programando" />
  <meta property="og:description" content="Documentación de PSeInt" />
  <meta property="og:image" content="https://pseint.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo-white.f3b9e7b5.png&w=96&q=75" />
  <meta property="og:url" content="https://pseint.vercel.app/" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@DevGallardoLau" />
  <meta name="theme-color" content="#000000" />
</Head>

      {/* HERO */}
      <Layout>
        <NavBar />
        <main className="my-auto flex flex-col pt-10">
          <h1 className="text-5xl font-black uppercase text-center">
            ERROR 404
          </h1>
          <Link href="/" className="btn btn-error mx-auto mt-2">
          Volver
          </Link>
        </main>
      </Layout>

      <Footer />
    </>
  );
}
