import type { NextPage } from "next";
import Head from "next/head";

import OurServices from "../src/components/OurServices/OurServices";
import Footer from "../src/components/Footer/Footer";
import Team from "../src/components/Team/Team";
import Slider from "../src/components/Slider/Slider";
import { SliderData } from "../src/components/Slider/SliderData";

import { useMoralis } from "react-moralis";

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



      <div className="container">
        <Navbar />
        <Hero />


        <div>
          <h1>Christmas gifts season</h1>
          {isAuthenticated ? (
            <p>You are logged in</p>
          ) : (
            <>
              <p>You are not logged in</p>
              <button onClick={() => authenticate()}>Authenticate</button>
            </>
          )}


        </div>

      <OurServices />
      <Slider slides={SliderData} />
      <Team />
      <Footer />

        <Link href="/contactTest">Questions</Link>
        <Link href="/signin">Sign in</Link>

      </div>
    </>
  );
};

export default Home;
