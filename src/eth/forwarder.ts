import { ethers } from "ethers";
import { forwardedAbi } from "../constants/abi-forwarded";
const address = "0xEf6ac4ce9eF1A18128624EB090FA74B7176132c7";

export function createInstance(provider: any) {
  return new ethers.Contract(address, forwardedAbi, provider);
}
