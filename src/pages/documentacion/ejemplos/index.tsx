import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

// Components
import { Layout, NavBar, Footer } from "~/components";
import { Suma} from "~/components/Ejemplos";

// Icons
import { FaArrowRight, FaHome } from "react-icons/fa";
import {
  ejemplosTexto,
  ejemplos,
} from "~/assets/constants";

declare global {
  interface Window {
    examples_modal: {
      showModal: () => void;
    };
  }
}

export default function Ejemplos() {
  const [selectedExample, setSelectedExample] = useState(0);

  const openModal = (index:number) => {
    setSelectedExample(index);
    window.examples_modal.showModal()
  };

  return (
    <>
      <Head>
        <title>PSeInt - Ejemplos</title>
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
                <Link href="/documentacion">Introducción</Link>
              </li>
              <li>
                <Link className="text-secondary" href="/documentacion">
                  Ejemplos
                </Link>
              </li>
            </ul>
          </div>
          <main className="flex w-full flex-col">
            <h1 className="text-4xl font-black text-primary">Ejemplos:</h1>
            <div className="flex flex-col gap-3">
              <h2 className="mt-4 text-2xl font-bold">
                Ejemplos de algoritmos en PSeudoCodigo
                <br />
              </h2>
              <p className="text-justify">{ejemplosTexto}</p>
              <div className="mt-2 grid gap-4 md:grid-cols-3">
                {ejemplos.map((item, index) => (
                  <button
                    onClick={() => openModal(index)}
                    key={index}
                    className="btn btn-secondary mb-2"
                  >
                    {item.titulo}
                  </button>
                ))}
              </div>
            </div>

            <dialog
              id="examples_modal"
              className="modal-center modal sm:modal-middle"
            >
              <form method="dialog" className="modal-box">
                {selectedExample !== null && (
                  <>
                  <p className="badge badge-error badge-lg font-black z-10 flex items-center justify-center mx-auto">ESTA SECCIÓN ESTÁ EN PROCESO</p>
                  <div className="blur-[3px]">
                    <h3 className="text-lg font-bold text-primary">
                      {ejemplos[selectedExample]?.titulo}
                    </h3>
                    <p className="py-4">
                      {ejemplos[selectedExample]?.descripcion}
                    </p>
                    <Suma />
                  </div>
                  </>
                )}
                <div className="modal-action">
                  <button
                    className="btn"
                  >
                    Cerrar
                  </button>
                </div>
              </form>
            </dialog>

            <div className="tooltip tooltip-top tooltip-error mt-10 max-w-fit mx-auto" data-tip="En proceso">   
            <button
              disabled
              className="btn btn-primary"
            >
              Capturas de Pantalla <FaArrowRight />
            </button>
            </div>
          </main>
        </section>
      </Layout>

      <Footer />
    </>
  );
}
