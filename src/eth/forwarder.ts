import { ethers } from "ethers";
import { forwardedAbi } from "../constants/abi-forwarded";
const address = "0xf8F38887ea903eBF82bc9069dFB782cc517baDeC";

export function createInstance(provider: any) {
  return new ethers.Contract(address, forwardedAbi, provider);
}
