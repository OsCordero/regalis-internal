import React, { useEffect, useState } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import { abi } from "../src/constants/abi";

interface NftResult {
  token_address: string;
  token_id: string;
  contract_type: string;
  owner_of: string;
  block_number: string;
  block_number_minted: string;
  token_uri?: string | undefined;
  metadata?: string | undefined;
  synced_at?: string | undefined;
  amount?: string | undefined;
  name: string;
  symbol: string;
}

interface DefaultGift {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
}

const Regalis = () => {
  const { signup, isInitialized } = useMoralis();
  const Web3Api = useMoralisWeb3Api();
  const [nfts, setNfts] = useState<DefaultGift[]>([]);

  const getNft = async () => {
    const testnetNFTs = await Web3Api.native.runContractFunction({
      chain: "rinkeby",
      address: "0xD83fEeDf924Cf5b1BCa80a403dad02Bd6a373Bd3",
      function_name: "getAllDefaultCharacters",
      abi,
    });
    return testnetNFTs;
  };

  useEffect(() => {
    if (isInitialized)
      getNft().then((res) => setNfts(res as unknown as DefaultGift[]));
  }, [isInitialized]);

  return (
    <div>
      <h1>Available gifts:</h1>
      <ul>
        {nfts.map((nft) => (
          <li key={nft["0"]}>{nft["1"]}</li>
        ))}
      </ul>
    </div>
  );
};

export default Regalis;
