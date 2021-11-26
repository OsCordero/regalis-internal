import { useWeb3ExecuteFunction } from "react-moralis";
import { abi } from "./../constants/abi";

export const useGetGift = () => {
  const functionData = useWeb3ExecuteFunction({
    abi: abi,
    contractAddress: process.env.NEXT_PUBLIC_REGALIS_NFT_CONTRACT_ADDRESS,
    functionName: "getRandomBox",
  });
  return functionData;
};
