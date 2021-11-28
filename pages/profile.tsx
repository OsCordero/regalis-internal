import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  useMoralis,
  useMoralisQuery,
  useWeb3ExecuteFunction,
} from "react-moralis";
import PrimaryButton from "../src/components/Buttons/PrimaryButton";
import Layout from "../src/components/Layout";
import { abi } from "../src/constants/abi";
import Modal from "../src/utils/Modal";

export default function Profile() {
  const [showAlert, setShowAlert] = useState(false);

  const {
    data,
    fetch,
    isLoading: allRegalisLoading,
  } = useWeb3ExecuteFunction(
    {
      abi: abi,
      contractAddress: process.env.NEXT_PUBLIC_REGALIS_NFT_CONTRACT_ADDRESS,
      functionName: "getAllDefaultCharacters",
    },
    { autoFetch: true }
  );

  const myData: any = data;

  const { user, isAuthenticated, isWeb3Enabled, web3, isInitialized } =
    useMoralis();

  const router = useRouter();

  const { data: dataObtained, isLoading: myRegalisloading } = useMoralisQuery(
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
    if (isWeb3Enabled) {
      fetch();
    }
  }, [isWeb3Enabled, fetch]);

  useEffect(() => {
    if (isWeb3Enabled) {
      web3?.eth.getChainId().then((chainId) => {
        if (chainId !== 80001) setShowAlert(true);
      });
    }
  }, [isWeb3Enabled, web3?.eth]);

  useEffect(() => {
    if (!isAuthenticated && isInitialized) {
      router.push("/login");
    }
  }, [isAuthenticated, isInitialized, router]);

  return (
    <Layout>
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

              <br />
              <br />
            </div>

            <br />
            {myRegalisloading || allRegalisLoading ? (
              <div className="flex justify-center">
                <svg
                  width="150"
                  height="150"
                  fill="currentColor"
                  className="mr-2 animate-spin text-purple-600"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
                </svg>
              </div>
            ) : null}
            {data && dataObtained && (
              <div className="grid gap-5 gap-y-11 mb-8 lg:grid-cols-4 sm:grid-cols-2">
                {(dataObtained as any)?.map((myNft: any, index: number) => {
                  return (
                    <div key={index}>
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

                      <p className="text-center">{`Purchase date: ${new Date(
                        myNft.attributes.createdAt
                      ).toLocaleString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}`}</p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
}
