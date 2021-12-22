import { ethers } from "ethers";
import { createContext, useContext } from "react";
import { abi } from "../constants/abi";

export const EthereumContext = createContext(
  {} as { provider: any; regalis: any }
);

export function createProvider() {
  return new ethers.providers.JsonRpcProvider(
    "https://polygon-mumbai.g.alchemy.com/v2/hL-50oTyiSlgj8H4rF-T9N032-Wh8-Xa",
    +process.env.NEXT_PUBLIC_CHAIN_ID!
  );
}
export function createInstance(provider: any) {
  return new ethers.Contract(
    process.env.NEXT_PUBLIC_REGALIS_NFT_CONTRACT_ADDRESS!,
    abi,
    provider
  );
}

const MetaTransactionProvider: React.FC = ({ children }) => {
  const provider = createProvider();
  const regalis = createInstance(provider);
  const ethereumContext = { provider, regalis };

  return (
    <EthereumContext.Provider value={ethereumContext}>
      {children}
    </EthereumContext.Provider>
  );
};

export const useMetaTransaction = () => {
  const meta = useContext(EthereumContext);
  if (meta) {
    return meta;
  } else {
    throw new Error("useMeta should be used inseide a metaProvider");
  }
};

export default MetaTransactionProvider;
