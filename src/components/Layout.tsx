import React, { useEffect } from "react";
import Link from "next/link";
import { useMoralis, useMoralisSubscription } from "react-moralis";
import PrimaryButton from "./Buttons/PrimaryButton";
import Footer from "./Footer";
import Header from "./Header";
import SuccessModal from "./SuccessModal";

const Layout: React.FC = ({ children }) => {
  const [successModal, setSuccessModal] = React.useState(true);
  const { enableWeb3, isWeb3Enabled, isAuthenticated, user } = useMoralis();

  useEffect(() => {
    if (isAuthenticated || !isWeb3Enabled) {
      enableWeb3();
    }
  }, [enableWeb3, isWeb3Enabled, isAuthenticated]);

  useMoralisSubscription(
    "CharacterNFTMinted",
    (query) =>
      query
        .equalTo("sender", user?.get("ethAddress"))
        .descending("createdAt")
        .limit(1),
    [user?.get("ethAddress")],
    {
      onCreate: () => {
        setSuccessModal(true);
      },
    }
  );

  return (
    <>
      <div className="flex flex-col justify-between min-h-screen">
        <Header />
        {children}
        <Footer />
      </div>
      <SuccessModal
        modal={successModal}
        handleClose={() => setSuccessModal(false)}
        message1="Hey! your gift has arrived, go check it to your profile"
        actions={
          <Link href="/profile" passHref>
            <PrimaryButton onClick={() => setSuccessModal(false)}>
              Go to my profile
            </PrimaryButton>
          </Link>
        }
      />
    </>
  );
};

export default Layout;
