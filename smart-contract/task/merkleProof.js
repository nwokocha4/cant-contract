const { task } = require("hardhat/config")
const { MerkleTree } = require('merkletreejs')
const keccak256 = require('keccak256')
const { CollectionConfig } = require('../config/CollectionConfig')


task('generate-proof', 'Generates and prints out the whitelist proof for the given address (compatible with block explorers such as Etherscan)', async ({ address }) => {
    // Check configuration
    if (CollectionConfig.whitelistAddresses.length < 1) {
      throw 'The whitelist is empty, please add some addresses to the configuration.';
    }
  
    // Build the Merkle Tree
    const leafNodes = CollectionConfig.whitelistAddresses.map(addr => keccak256(addr));
    const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });
    const proof = merkleTree.getHexProof(keccak256(address)).toString().replace(/'/g, '').replace(/ /g, '');
  
    console.log('The whitelist proof for the given address is: ' + proof);
  })
  .addPositionalParam('address', 'The public address');


  module.exports