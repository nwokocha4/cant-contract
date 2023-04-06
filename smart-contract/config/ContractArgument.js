//import { utils } from 'ethers';
//import CollectionConfig from './CollectionConfig';
const { utils, BigNumber } = require('ethers')
const { CollectionConfig } = require('./CollectionConfig')

// Update the following array if you change the constructor arguments...

const ContractArguments = [
  CollectionConfig.tokenName,
  CollectionConfig.tokenSymbol,
  utils.parseEther(CollectionConfig.whitelistSale.price.toString()),
  CollectionConfig.maxSupply,
  CollectionConfig.whitelistSale.maxMintAmountPerTx,
  CollectionConfig.hiddenMetadataUri,
]

module.exports = { ContractArguments }


