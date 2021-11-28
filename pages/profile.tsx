import React, { useState, useEffect } from "react";
import {
  useMoralis,
  useWeb3ExecuteFunction,
  useMoralisQuery,
  ByMoralis,
} from "react-moralis";
import PrimaryButton from "../src/components/Buttons/PrimaryButton";
import Header from "../src/components/Header";
import { abi } from "../src/constants/abi";
import Modal from "../src/utils/Modal";
import Footer from "../src/components/Footer";
import Head from "next/head";

export default function Profile() {
  const [showAlert, setShowAlert] = useState(false);

  const { data, fetch } = useWeb3ExecuteFunction(
    {
      abi: abi,
      contractAddress: process.env.NEXT_PUBLIC_REGALIS_NFT_CONTRACT_ADDRESS,
      functionName: "getAllDefaultCharacters",
    },
    { autoFetch: true }
  );

  const myData: any = data;
  interface DefaultGift {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
  }

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
    data: dataObtained,
    error: errordataObtained,
    isLoading: isLoadingdataObtained,
    isFetching: isFetchingdataObtained,
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
  console.log(dataObtained);

  useEffect(() => {
    enableWeb3();
    if (isWeb3Enabled) {
      fetch();
    }
  }, [isWeb3Enabled, enableWeb3, fetch]);

  useEffect(() => {
    if (isWeb3Enabled) {
      web3?.eth.getChainId().then((chainId) => {
        if (chainId !== 80001) setShowAlert(true);
      });
    }
  }, [isWeb3Enabled, web3?.eth]);

  return (
    <>
      <Head>
        <title>Your Profile</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="logo.png" />
      </Head>
      <Header />
      <div className="flex flex-col min-h-screen overflow-hidden">
        <Modal
          id="modal"
          ariaLabel="modal-headline"
          show={showAlert}
          handleClose={() => setShowAlert(false)}
        >
          <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800 w-96 m-auto">
            <div className="w-full h-full text-center">
              <div className="flex h-full flex-col justify-between">
                {/* <FaExclamationTriangle className="mt-4 w-12 h-12 m-auto text-blue-600" /> */}
                <p className="text-gray-800 dark:text-gray-200 text-xl font-bold mt-4">
                  Whoops, wrong chain!
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-md py-2 px-6">
                  You need to be connected to Mumbai Chain.
                </p>
                <div className="flex items-center justify-between gap-4 w-full mt-8">
                  <PrimaryButton>Change Chain</PrimaryButton>

                  <button
                    onClick={() => setShowAlert(false)}
                    type="button"
                    className="py-2 px-4  bg-white hover:bg-gray-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-indigo-500 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
        <section className="relative">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 lg:pt-40">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              {/* <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                  The gifts
                </p>
              </div> */}

              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <span className="relative">Check</span>
                </span>{" "}
                your Regalis!
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                {`Hey! ${user?.get(
                  "ethAddress"
                )} This is your collection of Regalis NFT's`}
              </p>
              {/* <button
                type="button"
                className="py-4 px-6 max-w-sm	mt-10 bg-purple-600 hover:bg-purple-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
              >
                Get Yours
              </button> */}
              <br />
              <br />
            </div>

            {/* <div className="grid gap-5 gap-y-11 mb-8 lg:grid-cols-4 sm:grid-cols-2">
              {(data as any)?.map((nft: any) => (
                <div
                  className="relative flex flex-col items-center justify-center max-w-sm mx-auto shadow-xl"
                  key={nft[0]}
                >
                  <img
                    className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
                    src={`https://cloudflare-ipfs.com/ipfs/${nft[2]}`}
                    alt="Gift"
                  />

                  <div className="w-56 -mt-10 absolute -bottom-4 overflow-hidden bg-pink-500 text-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                    <h3 className="py-2 font-bold tracking-wide text-center text-white uppercase dark:text-white">
                      {nft[1]}
                    </h3>
                  </div>
                </div>
              ))}
            </div> */}

            {console.log(data)}

            {/* {(isLoadingdataObtained || isFetchingdataObtained) &&
            dataObtained.length <= 0 &&
            data ? (
              <p>Loading...</p>
            ) : (
              <div>
                <h3 className="text-center">This is your last minted NFT</h3>
                <div className="relative flex flex-col items-center justify-center max-w-sm mx-auto shadow-xl">
                  <img
                    className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
                    src={`https://cloudflare-ipfs.com/ipfs/${
                      (data as any)?.[
                        dataObtained[dataObtained.length - 1]?.attributes
                          .characterIndex
                      ]?.[2]
                    }`}
                    // alt={"Blabla"}
                    // style={{ maxWidth: "200px" }}
                  />
                </div>
              </div>
            )} */}

            <br />
            {data && (
              <div className="grid gap-5 gap-y-11 mb-8 lg:grid-cols-4 sm:grid-cols-2">
                {(dataObtained as any)?.map((myNft: any) => {
                  return (
                    <>
                      <div>
                        <div className="relative flex flex-col items-center justify-center max-w-sm mx-auto shadow-xl">
                          <img
                            className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-lg"
                            src={`https://cloudflare-ipfs.com/ipfs/${
                              myData[myNft.attributes.characterIndex].imageURI
                            }`}
                            alt="Gift"
                          />
                          <div className="w-56 -mt-10 absolute -bottom-4 overflow-hidden bg-purple-600 text-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                            <h3 className="py-2 font-bold tracking-wide text-center text-white uppercase dark:text-white">
                              {myData[myNft.attributes.characterIndex].name}
                            </h3>
                          </div>
                        </div>
                        <br />

                        <p className="text-center">{`Purchase date: ${myNft.attributes.createdAt.toDateString()}`}</p>
                        {console.log(myNft.attributes.block_timestamp)}
                      </div>
                    </>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
