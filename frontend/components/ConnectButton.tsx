
import React, { useState } from 'react';
import {ethers} from "ethers";

import CoalAccess from "../../backend/artifacts/contracts/CoalAccess.sol/CoalAccess.json";

interface Connect {
    userPassed: string;
    setUserPassed(user:string): void;
}

const coalAccessAddress = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0';
const abi = CoalAccess.abi;


function ConnectButton({userPassed,setUserPassed} : Connect) {
  const [disabled,setDisabled] = useState<boolean>(false);


  const getUsers = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner()
    const contract = new ethers.Contract(coalAccessAddress, abi, signer);
    
    var currentId = await contract.currentUserCount();
    currentId = currentId.toNumber();

    for(let i= 0; i < currentId; i++){
      const user = await contract.users(i);
      if(user){
        console.log(user)
      }
    }
  }  



  const handleClick = async () => {
    if (typeof window.ethereum !== 'undefined') {
        console.log("connecting...");
        const ethereum = window.ethereum;
        setDisabled(true);
        try {
            const accounts = await ethereum.request({"method" : "eth_requestAccounts"});
            if (accounts && Array.isArray(accounts)){
                setUserPassed(accounts[0]);
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner()
                const contract = new ethers.Contract(coalAccessAddress, abi, signer);
                try {
                  await contract.register();
                } catch (error) {
                  
                  console.error(error);
                }
            }
            setDisabled(false);
        } catch (error) {
            setDisabled(false);
        }
      }
  }


  return (
    <>
     <button 
        disabled={disabled}
        onClick={handleClick}
        className='
        px-8 py-4 
        disabled:bg-gray-200
        disabled:hover:bg-gray-200
        disabled:hover:text-gray-100
        disabled:hover:border-gray-100
        border-2 l bg-black
      text-white hover:bg-white 
      hover:text-black hover:border-black 
        rounded-full transition ease-in-out '>
            Early Register
      </button>
    </>
  )
     
}

export default ConnectButton