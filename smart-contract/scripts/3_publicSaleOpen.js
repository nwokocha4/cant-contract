const { utils } = require("ethers")
const { CollectionConfig } = require("../config/CollectionConfig")
const { whitelist } = require("../lib/NftContractProvider")


async function main() {

  // if (CollectionConfig.whitelistAddresses.length < 1) {
  //   console.log("address cannot be empty")
  // };

  if (await (await whitelist.whitelistMintEnabled()) === true) {
    throw '\x1b[31merror\x1b[0m ' + 'please disable whitelist mint first.';
   }  

  const preSalePrice = utils.parseEther(CollectionConfig.preSale.price.toString());
  if (!await (await whitelist.cost()).eq(preSalePrice)) {
    console.log(`Updating the token price to ${CollectionConfig.preSale.price}...`);

    await (await whitelist.setCost(preSalePrice)).wait();
  }

  if (!await (await whitelist.maxMintAmountPerTx()).eq(CollectionConfig.preSale.maxMintAmountPerTx)) {
    console.log(`Updating the max mint amount per TX to ${CollectionConfig.preSale.maxMintAmountPerTx}...`);

    await (await whitelist.setMaxMintAmountPerTx(CollectionConfig.preSale.maxMintAmountPerTx)).wait();
  }
    
  

  if (await whitelist.paused()) {
    console.log('Enabling public sale...');
    await (await whitelist.setPaused(false)).wait();
    //console.log("disable whitelist mint before initaiting publicSale")
    
  }
  console.log('public sale has been enabled!');
  
  // if (await whitelist.paused()) 
  // {
  //   console.log('Enabling public sale...')
  //   await (await whitelist.setPaused(false)).wait()
  // }

  // console.log('Whitelist sale has been enabled!');




}

main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});


module.exports