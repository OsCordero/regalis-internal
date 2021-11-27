import React, { useState } from "react";
import Modal from "../utils/Modal";
import PrimaryButton from "./Buttons/PrimaryButton";

export default function SuccessModal({
  message1,
  message2,
  modal,
  handleClose,
}: {
  message1: string;
  message2: string;
  modal: boolean;
  handleClose: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      <Modal show={modal} handleClose={handleClose}>
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
                  {message1}
                  <span className="block">{message2}</span>
                </span>
              </p>
              <div className="flex items-center justify-between gap-4 w-full mt-8">
                <PrimaryButton onClick={() => handleClose(false)}>
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
