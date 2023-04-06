//const {CollectionConfigInterface} = require('../lib/CollectionConfigInterface')
//import Networks from '../lib/Networks';
//import Marketplaces from '../lib/Marketplaces';
//import whitelistAddresses from './whitelist.json';
const whitelistAddresses = require('./whitelist.json')
//ipfs://Qmd46Yq1BX7EnEUzzsLrWMTyM6mENZWGgu4QEowYcbRyep/

var CollectionConfig = {
  //testnet: Networks.hardhatLocal,
  //mainnet: Networks.ethereumMainnet,
  contractName: 'Canto',
  tokenName: 'My NFT Token',
  tokenSymbol: 'MNT',
  hiddenMetadataUri: 'ipfs://Qmd46Yq1BX7EnEUzzsLrWMTyM6mENZWGgu4QEowYcbRyep/',
  maxSupply: 10000,
  whitelistSale: {
    price: 0.00,
    maxMintAmountPerTx: 1,
  },
   preSale: {
     price: 0.00,
     maxMintAmountPerTx: 2,
   },
  publicSale: {
    price: 0.00,
    maxMintAmountPerTx: 1,
  },
  contractAddress: '0x93D035ABC5D1c0234Df44e206110271669C79455',
  //marketplaceIdentifier: 'my-nft-token',
  //marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

module.exports = { CollectionConfig };