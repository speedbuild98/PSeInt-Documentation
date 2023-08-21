import Head from "next/head";
import Link from "next/link";

// Components
import { Layout, NavBar, Footer } from "~/components";

// Icons
import { FaHome } from "react-icons/fa";

export default function Documentacion() {
  return (
    <>
      <Head>
        <title>PSeInt - Documentación</title>
        <meta name="description" content="Created by Gallardo Dev" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Layout>
        <NavBar />
        <section className="mt-20 flex w-full flex-col items-start justify-between">
          <div className="breadcrumbs text-sm md:text-base">
            <ul>
              <li>
                <Link href="/"><FaHome /></Link>
              </li>
              <li>
                <Link className="text-secondary" href="/documentacion">Introducción</Link>
              </li>
            </ul>
          </div>

          <main className="flex w-full flex-col">
            <h1 className="text-3xl font-black text-primary md:text-4xl">
              Manuales y Documentación:
            </h1>
            <p className="mt-4">
              Para documentación sobre las nuevas versiones, consulte las siguientes secciones del sitio:
            </p>
            <ul className="mt-2 flex flex-col justify-start items-start">
              <li><Link className="btn my-2" href="/documentacion/caracteristicas">Características y Funcionalidades</Link></li>
              <li><Link className="btn my-2" href="/documentacion/ejemplos">Ejemplos</Link></li>
              <li className="tooltip tooltip-right tooltip-error" data-tip="En proceso"><button disabled className="btn my-2">Capturas de Pantalla</button></li>
              <li className="tooltip tooltip-right tooltip-error" data-tip="En proceso"><button disabled className="btn my-2">PseudoCódigo</button></li>
            </ul>
            <p className="mt-4 text-xs">
              Mayor detalle se puede encontrar en la ayuda integrada del programa.
            </p>
          </main>
        </section>
      </Layout>

      <Footer />
    </>
  );
}
