import React from "react";
import GetGiftComponent from "../src/components/GetGift";
import Layout from "../src/components/Layout";
import Head from "next/head";

export default function GetGift() {
  return (
    <>
      <Head>
        <title>Purchase</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="logo.png" />
      </Head>
      <Layout>
        <div />
        <GetGiftComponent />
      </Layout>
    </>
  );
}
