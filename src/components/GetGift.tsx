import React, { useState } from "react";
import { useGetGift } from "../hooks/fetchHooks";
import Modal from "../utils/Modal";
import PrimaryButton from "./Buttons/PrimaryButton";

export default function GetGift() {
  const { error, fetch, isFetching, isLoading } = useGetGift();
  const [modal, setModal] = useState(false);
  const isRejected = error?.message.includes("User denied");
  const isNoMetamask = error?.message.includes("Missing web3 instance");

  const getRandomGift = async () => {
    fetch().then((result: any) => {
      if (result) {
        setModal(true);
      }
    });
  };

  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
          <div className="relative lg:w-1/2">
            <img
              src="/regalis-bg.png"
              alt=""
              className="object-cover w-full lg:absolute h-40 md:h-full "
            />
            <svg
              className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
              viewBox="0 0 20 104"
              fill="currentColor"
            >
              <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
            </svg>
          </div>
          <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
            <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
              Get your Regalis NFT
            </h5>
            <p className="mb-5 text-gray-800">
              <span className="font-bold">Lorem ipsum</span> dolor sit amet,
              consectetur adipiscing elit. Etiam sem neque, molestie sit amet
              venenatis et, dignissim ut erat. Sed aliquet velit id dui
              eleifend, sed consequat odio sollicitudin.
            </p>
            <div className="flex items-center w-48">
              <PrimaryButton
                onClick={() => getRandomGift()}
                loading={isFetching || isLoading}
              >
                Get your Gift!
              </PrimaryButton>
            </div>
            {(isFetching || isLoading) && (
              <p className="mt-2">
                {"We're making your order, this can take up to 30 seconds"}
              </p>
            )}
            {isRejected && (
              <p className="text-red-500 text-lg mt-2">
                You have to accept the transaction! please try again.
              </p>
            )}
            {isNoMetamask && (
              <p className="text-red-500 text-lg mt-2">
                You need to connect to metamask! please connect and try again.
              </p>
            )}
            {error && !isRejected && !isNoMetamask && (
              <p className="text-red-500 text-lg mt-2">
                Oh no, something went wrong, please try again.
              </p>
            )}
          </div>
        </div>
      </div>

      <Modal show={modal} handleClose={() => setModal(false)}>
        <div className="shadow-lg max-w-md rounded-2xl p-4 bg-white dark:bg-gray-800  m-auto">
          <div className="w-full h-full text-center">
            <div className="flex h-full flex-col justify-between">
              <svg
                className="h-12 w-12 mt-4 m-auto text-green-500"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <p className="text-gray-600 dark:text-gray-100 text-lg py-2 px-0">
                <span className="text-gray-800 dark:text-white font-bold">
                  {`We've got your order!, we are wrapping your gift now.`}
                  <span className="block">
                    {`You'll get notified when it's ready.`}
                  </span>
                </span>
              </p>
              <div className="flex items-center justify-between gap-4 w-full mt-8">
                <PrimaryButton onClick={() => setModal(false)}>
                  Close
                </PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
