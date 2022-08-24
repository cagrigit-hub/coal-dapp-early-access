import { ethers } from "hardhat";

async function main() {

  const CoalAccess = await ethers.getContractFactory("CoalAccess");
  const coalAccess = await CoalAccess.deploy();

  await coalAccess.deployed();

  console.log(`CoalAccess deployed to ${coalAccess.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
