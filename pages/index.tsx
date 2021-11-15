import type { NextPage } from "next";
import Link from "next/link";
import Hero from "../src/components/Hero";
import Navbar from "../src/components/Navbar";
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

          <Link href="/contactTest">Questions</Link>
        </div>
      </div>
    </>
  );
};

export default Home;
