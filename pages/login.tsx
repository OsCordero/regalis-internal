import { useRouter } from "next/router";
import React from "react";
import { FaLock } from "react-icons/fa";
import { useMoralis } from "react-moralis";
import PrimaryButton from "../src/components/Buttons/PrimaryButton";
import Header from "../src/components/Header";

const Login = () => {
  const { authenticate, isAuthenticated, isAuthenticating, authError } =
    useMoralis();
  const router = useRouter();

  if (isAuthenticated) {
    router.push("/dashboard");
  }

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-36 w-auto"
              src="/Regalis2.png"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in using metamask
            </h2>
          </div>
          <div>
            <PrimaryButton
              className="text-lg"
              onClick={() => authenticate()}
              loading={isAuthenticating}
            >
              Connect with metamask
            </PrimaryButton>
            {authError?.message.includes(
              "Request of type 'wallet_requestPermissions' already pending"
            ) && (
              <p className="text-red-500 text-sm mt-2">
                You have a pending request on your metamask, please check it.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
