//Next
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

//Components
import { Layout, NavBar, Footer, PseintLogo } from "~/components";

//Assets
import { Windows, Linux, Mac } from "~/assets";

//Icons
import { BsDownload } from "react-icons/bs";
import { BiSolidRightArrow } from "react-icons/bi";
import {
  FaGithub,
  FaLinkedin,
  FaMailBulk,
  FaFileDownload,
  FaBriefcase,
  FaCode,
  FaUserAstronaut,
} from "react-icons/fa";

export default function Home() {
  return (
    <>
<Head>
  <title>PSeInt - Inicio</title>
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
        <main className="my-auto flex flex-col">
          <PseintLogo />
          <h1 className="text-center text-2xl font-black md:text-4xl">
            La mejor forma de{" "}
            <span className="uppercase text-secondary">aprender</span> a{" "}
            <span className="uppercase text-primary">programar</span> es
            programando.
          </h1>
          <div className="my-5 flex items-center justify-center gap-3">
            <Link href="/documentacion" className="btn btn-primary">
              Documentación <BiSolidRightArrow />
            </Link>
            <Link href="#descargas" className="btn btn-neutral">
              Descargar <BsDownload />
            </Link>
          </div>
          <Link href="pseint" className="btn btn-sm btn-accent btn-outline mx-auto">
              Versión Web <FaCode />
          </Link>
          <div className="tooltip tooltip-right tooltip-warning max-w-fit mx-auto mt-5" data-tip="En proceso">
          <button className="btn btn-sm btn-accent btn-outline mx-auto cursor-not-allowed" disabled>
              Foro <FaUserAstronaut />
          </button>
          </div>
        </main>
      </Layout>

      {/* DOWNLOAD */}
      <Layout id="descargas">
        <div className="my-auto flex flex-col items-center justify-center md:max-w-4xl">
          <h3 className="text-primary text-4xl font-black md:text-6xl">Descargas</h3>
          <p className="mt-2 text-center md:text-lg">
            PSeInt es es una herramienta para asistir a un estudiante en sus
            primeros pasos en programación.
          </p>
          <section className="mt-5 flex w-full flex-wrap justify-around gap-5">
            <Link
              className="flex scale-90 flex-col items-center justify-center rounded-md border p-10 text-center saturate-0 transition-transform duration-300 ease-in-out hover:scale-100 hover:animate-pulse hover:saturate-100"
              target="_blank"
              href="https://pseint.sourceforge.net/index.php?page=descargas.php&os=lnx"
            >
              <Image src={Linux} width={80} height={80} alt="PSeInt" />
              <p className="font-bold">
                PSeInt para
                <br /> GNU/Linux
              </p>
            </Link>
            <Link
              className="flex scale-90 flex-col items-center justify-center rounded-md border p-10 text-center saturate-0 transition-transform duration-300 ease-in-out hover:scale-100 hover:animate-pulse hover:saturate-100"
              target="_blank"
              href="https://pseint.sourceforge.net/index.php?page=descargas.php&os=w32"
            >
              <Image src={Windows} width={80} height={80} alt="PSeInt" />
              <p className="font-bold">
                PSeInt para
                <br /> Windows
              </p>
            </Link>
            <Link
              className="flex scale-90 flex-col items-center justify-center rounded-md border p-10 text-center saturate-0 transition-transform duration-300 ease-in-out hover:scale-100 hover:animate-pulse hover:saturate-100"
              target="_blank"
              href="https://pseint.sourceforge.net/index.php?page=descargas.php&os=mac"
            >
              <Image src={Mac} width={80} height={80} alt="PSeInt" />
              <p className="font-bold">
                PSeInt para
                <br /> MacOS
              </p>
            </Link>
          </section>
        </div>
      </Layout>

      {/* ABOUT */}
      <Layout id="informacion">
        <section className="my-auto flex flex-col items-center justify-center gap-4 md:max-w-4xl">
          <div className="flex flex-col gap-2">
            <h2 className="text-secondary text-center text-4xl font-black md:text-6xl">¿Qué es PSeInt?</h2>
            <p className="mt-2 text-center">
              PSeInt es una herramienta para asistir a un estudiante en sus
              primeros pasos en programación. Mediante un simple e intuitivo
              pseudolenguaje en español (complementado con un editor de
              diagramas de flujo), le permite centrar su atención en los
              conceptos fundamentales de la algoritmia computacional,
              minimizando las dificultades propias de un lenguaje y
              proporcionando un entorno de trabajo con numerosas ayudas y
              recursos didácticos.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="mockup-code z-0">
              <pre data-prefix=">">
                <code><span className="text-info font-bold">Definir</span> name <span className="text-success font-bold">Como Cadena</span></code>
              </pre>
              <pre data-prefix=">">
                <code><span className="text-error font-bold">Escribir</span> &quot;Ingrese su nombre:&quot;</code>
              </pre>
              <pre data-prefix=">">
                <code><span className="text-warning font-bold">Leer</span> name</code>
              </pre>
              <pre data-prefix=">">
                <code><span className="text-error font-bold">Escribir</span> &quot;Hola &quot;,name</code>
              </pre>
            </div>
            <Link
              target="_blank"
              href="https://pseint.sourceforge.net/index.php?page=noticias.php"
              className="btn btn-secondary"
            >
              Últimas novedades
            </Link>
          </div>
        </section>
      </Layout>

      {/* CONTACT */}
      <Layout id="contacto">
        <div className="my-auto flex flex-col items-center justify-center mb-20  md:max-w-4xl">
          <h4 className="text-accent text-4xl font-black md:text-6xl">Contacto</h4>
          <p className="mt-2 text-center">
            Puedes comunicarte conmigo para recibir ayuda, compartir tus
            proyectos e incluso contribuir al proyecto.
          </p>
          <section className="mt-5 flex w-full flex-wrap justify-around gap-4 md:justify-center">
            <Link
              className="flex w-64 flex-col items-center justify-center gap-2 rounded-md border border-primary bg-primary bg-opacity-10 p-5 text-center transition-transform duration-300 ease-in-out hover:bg-opacity-30"
              target="_blank"
              href="https://github.com/speedbuild98/"
            >
              <FaBriefcase className="text-4xl" />
              <p className="font-bold">Portfolio</p>
              <p className="text-sm">Acá podrás leer más sobre mi carrera.</p>
            </Link>

            <Link
              className="flex w-64 flex-col items-center justify-center gap-2 rounded-md border border-primary bg-primary bg-opacity-10 p-5 text-center transition-transform duration-300 ease-in-out hover:bg-opacity-30"
              target="_blank"
              href="https://github.com/speedbuild98/"
            >
              <FaGithub className="text-4xl" />
              <p className="font-bold">GitHub</p>
              <p className="text-sm">No olvides seguirme en GitHub.</p>
            </Link>

            <Link
              className="flex w-64 flex-col items-center justify-center gap-2 rounded-md border border-primary bg-primary bg-opacity-10 p-5 text-center transition-transform duration-300 ease-in-out hover:bg-opacity-30"
              target="_blank"
              href="https://www.linkedin.com/in/lautagallardogg/"
            >
              <FaLinkedin className="text-4xl" />
              <p className="font-bold">LinkedIn</p>
              <p className="text-sm">Conecta conmigo en LinkedIn.</p>
            </Link>

            <Link
              className="flex w-64 flex-col items-center justify-center gap-2 rounded-md border border-primary bg-primary bg-opacity-10 p-5 text-center transition-transform duration-300 ease-in-out hover:bg-opacity-30"
              target="_blank"
              href="mailto:dev.gallardolautaro@gmail.com"
            >
              <FaMailBulk className="text-4xl" />
              <p className="font-bold">E-Mail</p>
              <p className="text-sm">
                Puedes comunicarte conmigo por este medio.
              </p>
            </Link>

            <Link
              className="flex w-64 flex-col items-center justify-center gap-2 rounded-md border border-primary bg-primary bg-opacity-10 p-5 text-center transition-transform duration-300 ease-in-out hover:bg-opacity-30"
              target="_blank"
              href="https://raw.githubusercontent.com/speedbuild98/speedbuild98/main/Resume%20-%20Gallardo%20Lautaro.pdf"
            >
              <FaFileDownload className="text-4xl" />
              <p className="font-bold">¿Trabajamos juntos?</p>
              <p className="text-sm">Descarga mi CV.</p>
            </Link>
          </section>
        </div>
      </Layout>

      <Footer />
    </>
  );
}
