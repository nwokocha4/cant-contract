// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers } = require("hardhat");
//const { hre } = require('@nomiclabs/hardhat-ethers')
//const { CollectionConfig } = require("../config/CollectionConfig");
const { ContractArguments } = require("../config/ContractArgument");
//const {CollectionConfig} = require("../config/CollectionConfig");
//const { default: ContractArguments } = require("../config/ContractArgument");
//const { NftContractType } = require('../lib/NftContractProvider')

async function main() {
  const contract = await ethers.getContractFactory("Canto")
  console.log("deploying contract...")
  const CantoContract = await contract.deploy(...ContractArguments)
  await CantoContract.deployed();
  

  console.log(`contract deployed to: ${CantoContract.address}`)
 

  
    }


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});


module.exports