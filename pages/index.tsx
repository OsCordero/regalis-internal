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
// import { useEffect } from "react";

const Home: NextPage = () => {
  // useEffect(() => {
  //   alert('Finished loading');
  // }, [])

  return (
    <>
      <Head>
        <title>Regalis</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="container">
        {/* <Header /> */}
        <Navbar />
        <Hero />

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
