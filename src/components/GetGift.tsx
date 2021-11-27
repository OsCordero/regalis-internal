import React, { useEffect, useState } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import { useGetGift } from "../hooks/fetchHooks";
import PrimaryButton from "./Buttons/PrimaryButton";
import SuccessModal from "./SuccessModal";
import { registerName } from "../eth/register";
export default function GetGift() {
  //const { error, fetch, isFetching, isLoading, data, setData } = useGetGift();
  const { user, web3, Moralis } = useMoralis();
  const [modal, setModal] = useState(false);
  // const isRejected = error?.message.includes("User denied");
  // const isNoMetamask = error?.message.includes("Missing web3 instance");

  // useEffect(() => {
  //   if (data) {
  //     setModal(true);
  //   }
  // }, [data]);

  // const getRandomGift = async () => {

  //   fetch(
  //     "https://api.defender.openzeppelin.com/autotasks/5f92d353-7413-4d36-af23-4b3a6e400b25/runs/webhook/56656eb4-0c5f-4ccc-86ee-9e05851efc95/XsCBVKNdb7cE3sLDfM7QiA"
  //   ).then((res) => {
  //     console.log(res);
  //   });
  // };
  const Web3Api = useMoralisWeb3Api();

  const getRandomGift = async () => {
    const response = await registerName(registry, provider, name);
  };

  return (
    <>
      <div
        className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
        data-aos="fade-down"
      >
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

      <SuccessModal
        modal={modal}
        handleClose={() => setModal(false)}
        message1="We've got your order!, we are wrapping your gift now."
        message2="You'll get notified when it's ready."
      />
    </>
  );
}
