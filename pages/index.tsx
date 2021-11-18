import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Hero from "../src/components/Hero/Hero";
import Navbar from "../src/components/Navbar/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Regalis</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="color">
        <Navbar />
        <Hero />
      </div>

      <div className="container">
        <Navbar />
        <Hero />

        <Link href="/contactTest">Questions</Link>
        <Link href="/signin">Sign in</Link>
      </div>
    </>
  );
};

export default Home;
