import Head from "next/head";
import Link from "next/link";

// Components
import { Layout, NavBar, Footer } from "~/components";

// Icons
import { FaArrowRight, FaHome } from "react-icons/fa";
import { paraQueSirve, listaDeFuncionalidades } from "~/assets/constants";

export default function Caracteristicas() {
  return (
    <>
      <Head>
        <title>PSeInt - Características y Funcionalidades</title>
        <meta name="description" content="Created by Gallardo Dev" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      {/* HERO */}
      <Layout>
        <NavBar />
        <section className="mt-20 flex w-full flex-col items-start justify-between">
        <div className="breadcrumbs text-sm md:text-base">
            <ul>
              <li>
                <Link href="/">
                  <FaHome />
                </Link>
              </li>
              <li>
                <Link href="/documentacion">
                  Introducción
                </Link>
              </li>
              <li>
                <Link className="text-secondary" href="/documentacion">
                  Caracteristicas y Funcionalidades
                </Link>
              </li>
            </ul>
          </div>
          <main className="flex w-full flex-col">
            <h1 className="text-4xl font-black text-primary">
              Características y Funcionalidades:
            </h1>
            <div className="flex flex-col gap-3">
              <h2 className="mt-4 text-2xl font-bold">
                ¿Para qué sirve PSeInt?
                <br />
              </h2>
              <p className="text-justify">{paraQueSirve}</p>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="mt-4 text-2xl font-bold">
                Características y Funcionalidades de PSeInt:
              </h3>
              <div className="mt-2 list-decimal">
                {listaDeFuncionalidades.map((item, index) => (
                  <li className="text-sm my-2" key={index}>{item}</li>
                ))}
              </div>
            </div>

            <div className="tooltip tooltip-top tooltip-success mt-10 max-w-fit mx-auto" data-tip="En proceso">   
            <Link
            href="/documentacion/ejemplos"
            className="btn btn-primary"
            >
              Ejemplos <FaArrowRight />
            </Link>
            </div>

          </main>
        </section>
      </Layout>

      <Footer />
    </>
  );
}
