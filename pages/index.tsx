import type { NextPage } from "next";
import Hero from "../src/components/Hero/Hero";
import Navbar from "../src/components/Navbar/Navbar"
import Head from "next/head";

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
    </>
  );
};

export default Home;
