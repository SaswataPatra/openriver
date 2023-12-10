
import { FunctionComponent, createContext, useContext, useEffect, useState } from "react";
import { Web3State, createDefaultState } from "./utils";


const Web3Context = createContext<Web3State>(createDefaultState())

const Web3Provider: FunctionComponent<any> = ({children}) =>{

    const [web3Api,setWeb3Api] = useState<Web3State>(createDefaultState())

    const ethereum = typeof window!=='undefined' ? window.ethereum :null

    useEffect(() => {
      function initweb3(){
        setWeb3Api({
            ethereum: ethereum,
            provider: null,
            contract : null,
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