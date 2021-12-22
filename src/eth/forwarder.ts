import { ethers } from "ethers";
import { forwardedAbi } from "../constants/abi-forwarded";
const address = process.env.NEXT_PUBLIC_FORWARDER as string;

export function createInstance(provider: any) {
  return new ethers.Contract(address, forwardedAbi, provider);
}
