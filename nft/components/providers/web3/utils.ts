import { MetaMaskInpageProvider } from "@metamask/providers";
import { BrowserProvider, Contract, ethers } from "ethers";

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
}

export type Web3Params = {
  ethereum: MetaMaskInpageProvider | null;
  provider: BrowserProvider | null;
  contract: Contract | null;
};

export type Web3State = {
  isLoading: boolean;
} & Web3Params;

export const createDefaultState = () => {
  return {
    ethereum: null,
    provider: null,
    contract: null,
    isLoading: true,
  };
};

const NETWORK_ID = 5777;

export const loadContract = async (provider: BrowserProvider,name : string):Promise<Contract> => {

  const res = await fetch(`contracts/${name}.json`);
  const Artifact = await res.json();

  if (Artifact.networks[NETWORK_ID]) {
    const contract = new ethers.Contract(
      Artifact.networks[NETWORK_ID].address,
      Artifact.abi,
      provider
    );
    console.log("This is contract inside loadContract",contract)
    return contract;
  }else{
    return Promise.reject(`Contract ${name} cannot be loaded`)
  }

  
};
