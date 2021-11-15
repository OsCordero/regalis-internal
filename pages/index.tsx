import type { NextPage } from "next";

import Hero from "../src/components/Hero/Hero";
import Navbar from "../src/components/Navbar/Navbar"
import Head from "next/head";
import { useMoralis } from "react-moralis";

const Home: NextPage = () => {
  const { authenticate, isAuthenticated } = useMoralis();
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
      </div>

    </>
  );
};

export default Home;
