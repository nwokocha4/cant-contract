const { utils } = require("ethers")
const { CollectionConfig } = require("../config/CollectionConfig")
const { whitelist } = require("../lib/NftContractProvider")
const { MerkleTree } = require('merkletreejs')
const keccak256 = require('keccak256')


async function main() {

  if (CollectionConfig.whitelistAddresses.length < 1) {
    console.log("address cannot be empty")
  };

    // Build the Merkle Tree
    const leafNodes = CollectionConfig.whitelistAddresses.map(addr => keccak256(addr));
    const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });
    const rootHash = '0x' + merkleTree.getRoot().toString('hex');

  if (await (await whitelist.paused()) === false) {
    throw '\x1b[31merror\x1b[0m ' + 'please disable public mint first.';
   }  

  const whitelistPrice = utils.parseEther(CollectionConfig.whitelistSale.price.toString());
  if (!await (await whitelist.cost()).eq(whitelistPrice)) {
    console.log(`Updating the token price to ${CollectionConfig.whitelistSale.price}...`);

    await (await whitelist.setCost(whitelistPrice)).wait();
  }

  if (!await (await whitelist.maxMintAmountPerTx()).eq(CollectionConfig.whitelistSale.maxMintAmountPerTx)) {
    console.log(`Updating the max mint amount per TX to ${CollectionConfig.whitelistSale.maxMintAmountPerTx}...`);

    await (await whitelist.setMaxMintAmountPerTx(CollectionConfig.whitelistSale.maxMintAmountPerTx)).wait();
  }

   // Update root hash (if changed)
   if ((await whitelist.merkleRoot()) !== rootHash) {
    console.log(`Updating the root hash to: ${rootHash}`);

    await (await whitelist.setMerkleRoot(rootHash)).wait();
  }
  
  
  if (!await whitelist.whitelistMintEnabled()) {
    console.log('Enabling whitelist sale...');

    await (await whitelist.setWhitelistMintEnabled(true)).wait();
  }

  console.log('Whitelist sale has been enabled!');

  // console.log("...enabling whitelist")
  // const whitelistEnable = await whitelist.setWhitelistMintEnabled(true)
  // console.log(whitelistEnable)
}

main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});


module.exports