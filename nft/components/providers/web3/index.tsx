
import { FunctionComponent, createContext, useContext, useEffect, useState } from "react";
import { Web3State, createDefaultState, loadContract } from "./utils";
import { ethers } from "ethers"; 

const Web3Context = createContext<Web3State>(createDefaultState())

const Web3Provider: FunctionComponent<any> = ({children}) =>{

    const [web3Api,setWeb3Api] = useState<Web3State>(createDefaultState())

    const ethereum = typeof window!=='undefined' ? window.ethereum :null
    const provider = ethereum ? new  ethers.BrowserProvider(window.ethereum) : null

    useEffect(() => {
     async function initweb3(){
        const contract = await loadContract(provider!,"SimpleStorage"!)
        setWeb3Api({
            ethereum: ethereum,
            provider: provider,
            contract : contract,
            isLoading : false
        })
      }
    
      initweb3()
    }, [])
    

    return(
            <Web3Context.Provider value={web3Api}>
                {children}
            </Web3Context.Provider>
        
    )
}

export function useweb3(){
    return useContext(Web3Context)
}

export default Web3Provider