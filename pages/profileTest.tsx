import React, { useEffect, useState } from "react";
import {
  useMoralis,
  useMoralisQuery,
  useMoralisSubscription,
  useMoralisWeb3Api,
  useWeb3ExecuteFunction,
} from "react-moralis";
import { abi } from "../src/constants/abi";

export default function ProfileTest() {
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
        .descending("createdAt");
    },
    [user?.get("ethAddress")],
    { live: true }
  );

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
    </div>
  );
}
