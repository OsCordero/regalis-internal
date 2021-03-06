import React, { useEffect, useState } from "react";
import {
  useMoralis,
  useMoralisQuery,
  useMoralisSubscription,
  useMoralisWeb3Api,
  useWeb3ExecuteFunction,
} from "react-moralis";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import { abi } from "../src/constants/abi";

interface NftResult {
  token_address: string;
  token_id: string;
  contract_type: string;
  owner_of: string;
  block_number: string;
  block_number_minted: string;
  token_uri?: string | undefined;
  metadata?: string | undefined;
  synced_at?: string | undefined;
  amount?: string | undefined;
  name: string;
  symbol: string;
}

interface DefaultGift {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
}

//  const {Moralis} = useMoralis();

const Regalis = () => {
  const {
    signup,
    isInitialized,
    enableWeb3,
    isAuthenticating,
    authError,
    user,
    isAuthenticated,
    authenticate,
    logout,
    isWeb3Enabled,
    environment,
    Moralis,
    auth,
    web3,
  } = useMoralis();
  const Web3Api = useMoralisWeb3Api();
  const { data, error, fetch, isFetching, isLoading } = useWeb3ExecuteFunction({
    abi: abi,
    contractAddress: process.env.NEXT_PUBLIC_REGALIS_NFT_CONTRACT_ADDRESS,
    functionName: "getRandomBox",
  });

  const {
    data: dataNFTS,
    fetch: fetchNFTS,
    isFetching: isFetchinNFTS,
    isLoading: isLoadingNFTS,
  } = useWeb3ExecuteFunction(
    {
      abi: abi,
      contractAddress: process.env.NEXT_PUBLIC_REGALIS_NFT_CONTRACT_ADDRESS,
      functionName: "getAllDefaultCharacters",
    },
    { autoFetch: true }
  );


  //web3?.eth.getChainId().then(console.log);


  const {
    data: lastObtained,
    error: errorLastObtained,
    isLoading: isLoadingLastObtained,
    isFetching: isFetchingLastObtained,
  } = useMoralisQuery(
    "CharacterNFTMinted",
    (query) => {
      return query
        .equalTo("sender", user?.get("ethAddress"))
        .descending("createdAt")
        .limit(1);
    },
    [user?.get("ethAddress")],
    { live: true }
  );

  useMoralisSubscription(
    "CharacterNFTMinted",
    (query) =>
      query
        .equalTo("sender", user?.get("ethAddress"))
        .descending("createdAt")
        .limit(1),
    [user?.get("ethAddress")],
    {
      onCreate: (data) =>
        console.log(`${data.attributes.characterIndex} was just created`),
    }
  );

  console.log("LAST OBTAINED", lastObtained);

  const getRandomGift = async () => {
    fetch().then((result: any) => console.log("RESULT", result));
  };
  console.log(dataNFTS);

  useEffect(() => {
    enableWeb3();
    console.log("isWeb3Enabled", isWeb3Enabled);

    if (isWeb3Enabled) {
      web3?.eth.getChainId().then(console.log);
      fetchNFTS();
      console.log("fetching");
    }
  }, [isWeb3Enabled, isInitialized, enableWeb3, fetchNFTS]);

  return (
    <div>
      <Header />
      <br />
      <br />

      <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        <span className="relative">Regalis</span>
      </h2>
      <h2>Get your gift</h2>
      {isAuthenticated ? (
        <>
          <p>You are logged in</p>
          <button onClick={() => logout()}>Logout</button>
        </>
      ) : (
        <>
          <p>You are not logged in</p>
          {isAuthenticating ? <p>Loading...</p> : null}
          {authError && <p>{authError.message}</p>}
          <button onClick={() => authenticate()}>Authenticate</button>
        </>
      )}
      {/* Html button react*/}
      <button
        style={{
          padding: "12px 16px",
          backgroundColor: "#0070f3",
          border: "none",
          borderRadius: "10px",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
        }}
        onClick={() => getRandomGift()}
      >
        {isLoading || isFetching ? "LOADING..." : "Get Gift"}
      </button>
      {error && <p>{error.message}</p>}

      <h2>Last obtained:</h2>

      {(isLoadingLastObtained || isFetchingLastObtained) &&
      lastObtained.length <= 0 &&
      dataNFTS ? (
        <p>Loading...</p>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://cloudflare-ipfs.com/ipfs/${
            (dataNFTS as any)?.[
              lastObtained[lastObtained.length - 1]?.attributes.characterIndex
            ]?.[2]
          }`}
          alt={"Blabla"}
          style={{ maxWidth: "200px" }}
        />
      )}
      <h1>Available gifts:</h1>
      <ul style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
        {(dataNFTS as DefaultGift[])?.map((nft) => (
          <li key={nft[0]}>
            <h1 style={{ fontSize: "1rem" }}>{nft[1]}</h1>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://cloudflare-ipfs.com/ipfs/${nft[2]}`}
              alt={nft[0]}
              style={{ maxWidth: "200px" }}
            />
          </li>
        ))}
      </ul>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Regalis;
