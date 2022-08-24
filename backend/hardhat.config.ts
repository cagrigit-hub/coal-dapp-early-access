import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";


/* 
For configuration we should give our hardhat an output root to write our output. (In this case It is our contract.json file)

*/
const config: HardhatUserConfig = {
  //Version of solidity used
  solidity: "0.8.9",
  // Output directory
  paths:{
    artifacts: "./artifacts"
  },
  // To add extra networks, but in this tutorial We are using local
  networks : {
    hardhat : {
      chainId: 1337,
    },
  }
};

export default config;
