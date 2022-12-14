
import React, { useState } from 'react';
import {ethers} from "ethers";

// Importing Contract's JSON file to get ABI.
import CoalAccess from "../../backend/artifacts/contracts/CoalAccess.sol/CoalAccess.json";


// useState is passed to this code. So I wrote an interface.
interface Connect {
  // value of useState
    userPassed: string;
  // function of useState
    setUserPassed(user:string): void;
}
// I deployed my code with using Hardhat twice, that's why contract's address is : 
const coalAccessAddress = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0';

const abi = CoalAccess.abi;


function ConnectButton({userPassed,setUserPassed} : Connect) {

  // Whenever a user tries to register, our register button should be disabled until their job is finished.
  const [disabled,setDisabled] = useState<boolean>(false);

 // To get all of the users.
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


// To register to early access & Log In to the website
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