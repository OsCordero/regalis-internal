import { ethers } from "ethers";
import { createInstance } from "./forwarder";
import { signMetaTxRequest } from "./utils/signer";

declare const window: Window &
  typeof globalThis & {
    ethereum: any;
  };

async function sendTx(regalis: any) {
  return regalis.getRandomBox();
}

async function sendMetaTx(regalis: any, provider: any, signer: any) {
  console.log(`Sending register meta-tx to set`);
  const url =
    "https://api.defender.openzeppelin.com/autotasks/def07ae6-6a83-4841-8476-2b07b0ad5cf8/runs/webhook/56656eb4-0c5f-4ccc-86ee-9e05851efc95/SgdgtrYjFBeRGSLBZasYqB";
  if (!url) throw new Error(`Missing relayer url`);

  const forwarder = createInstance(provider);
  const from = await signer.getAddress();
  const data = regalis.interface.encodeFunctionData("getRandomBox", []);
  const to = regalis.address;

  const request = await signMetaTxRequest(signer.provider, forwarder, {
    to,
    from,
    data,
  });
  console.log(request);
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(request),
    headers: { "Content-Type": "application/json" },
  });
}
export const myFunc = async (regalis: any, provider: any) => {
  if (!window.ethereum) throw new Error(`User wallet not found`);

  await window.ethereum.enable();

  const userProvider = new ethers.providers.Web3Provider(
    window.ethereum,
    "any"
  );

  const userNetwork = await userProvider.getNetwork();
  if (userNetwork.chainId !== 80001)
    throw new Error(`Please switch to xDAI for signing`);
  console.log(userProvider);

  const signer = userProvider.getSigner();
  console.log(signer);
  const from = await signer.getAddress();
  console.log(from);
  const balance = await provider.getBalance(from);

  const canSendTx = balance.gt(1e15);

  if (canSendTx) return sendTx(regalis.connect(signer));
  else return sendMetaTx(regalis, provider, signer);
};
