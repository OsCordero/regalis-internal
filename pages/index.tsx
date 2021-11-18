import type { NextPage } from "next";
import Hero from "../src/components/Hero/Hero";
import Navbar from "../src/components/Navbar/Navbar"
import Head from "next/head";
import OurServices from "../src/components/OurServices/OurServices";
import Footer from "../src/components/Footer/Footer";
import Team from "../src/components/Team/Team";
import Slider from "../src/components/Slider/Slider";
import { SliderData } from "../src/components/Slider/SliderData";

const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>Regalis</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
 
    <div>
      <Navbar />
      <Hero />
      <OurServices />
      <Slider slides={SliderData} />
      <Team />
      <Footer />
      
      
    </div>
    </>
  );
};

export default Home;
