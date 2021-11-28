import React from "react";
import Contact from "../src/components/Contact/Contact";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import Layout from "../src/components/Layout";
import Head from "next/head";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="logo.png" />
      </Head>
      <Layout>
        <Contact />
        <br />
        <br />
        <br />
        <br />
      </Layout>
    </>
  );
}
