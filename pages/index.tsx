import React from "react";
import Head from "next/head";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import HeroHome from "../src/components/HeroHome";
import Tech from "../src/components/Tech";

export default function landingPage() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Head>
        <title>Regalis</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <HeroHome />
      <Tech />
      <Footer />
    </div>
  );
}
