// Next
import Head from "next/head";
import { useSession } from "next-auth/react";

// Components
import { Layout, NavBar, Footer } from "~/components";

export default function Terminal() {
  const { data: sessionData } = useSession();

  return (
    <>
      <Head>
        <title>PSeInt - APP</title>
        <meta name="description" content="Created by Gallardo Dev" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Layout>
        <NavBar />
        <section className="mt-20 flex w-full flex-col items-start justify-between">
          <main className="flex w-full flex-col">
            <h1 className="text-3xl font-black">
              ¡Hola{sessionData && `${sessionData?.user?.name}`}!
            </h1>
          </main>

          <div className="mt-4 w-full">
            <textarea
              disabled
              className="w-full rounded-lg border-2 border-gray-300 p-2"
              placeholder="Escribe tu código aquí..."
              rows={10}
            />
            <div className="flex gap-3">
              <button disabled className="btn btn-success">
                Ejecutar
              </button>
              <button disabled className="btn btn-error">
                Limpiar
              </button>
            </div>
            <div className="mockup-code mt-10">
              <pre data-prefix=">">
                <code className="text-error">ERROR</code>
              </pre>
              <pre data-prefix=">">
                <code>Está página está en proceso</code>
              </pre>
            </div>
          </div>
        </section>
      </Layout>

      <Footer />
    </>
  );
}
