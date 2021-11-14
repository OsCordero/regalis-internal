import type { NextPage } from "next";
import Link from "next/link";
import Hero from "../src/components/Hero";
import Navbar from "../src/components/Navbar"
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>Regalis</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
 
    <div className="container">
      <Navbar />
      <Hero />
      
      
    </div>
    </>
  );
};

export default Home;
