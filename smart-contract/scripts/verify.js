const { ethers, run, hre } = require("hardhat");
//onst {hre} = require('@nomiclabs/hardhat-ethers');
const { CollectionConfig } = require("../config/CollectionConfig");
// const { ContractArguments } = require("../config/ContractArgument");
// const { utils, BigNumber } = require('ethers');


async function main() {
  if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY) {
    console.log("verifying contract...")
    try {
      await run("verify:verify", {
        address: CollectionConfig.contractAddress,
        constructorArguments: [
        CollectionConfig.tokenName,
        CollectionConfig.tokenSymbol,
        CollectionConfig.whitelistSale.price,       
        CollectionConfig.maxSupply,
        CollectionConfig.whitelistSale.maxMintAmountPerTx,
        CollectionConfig.hiddenMetadataUri,
        ],
      });

    } catch (e) {
      if (e.message.toLowerCase().includes("already verified")) {
        console.log("Already Verified")
      } else {
        console.log(e)
      }
    }
  }
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