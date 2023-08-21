//Next
import Head from "next/head";
import Link from "next/link";

//Components
import { Layout, NavBar } from "~/components";

//Icons
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { BiSolidRightArrow } from "react-icons/bi";

export default function Home() {

  return (
    <>
      <Head>
        <title>PSeInt - Documentación</title>
        <meta name="description" content="Created by Gallardo Dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <NavBar />
      <main className="flex flex-col my-auto">
        <h1 className="font-black text-5xl text-center">
          La mejor forma de aprender a <span className="text-primary uppercase">programar</span> es <span className="text-secondary uppercase">programando</span>.
        </h1>
        <div className="flex justify-center items-center gap-3 my-5">
          <Link href={}>
          <button className="btn">
            Documentación <BiSolidRightArrow />
          </button>
          </Link>
          <Link href={}>
          <button className="btn btn-neutral">
            GitHub <BsBoxArrowInUpRight />
          </button>
          </Link>
        </div>
      </main>
      </Layout>
    </>
  );
}

