const contracts = require("../artifacts/contracts/Canto.sol/Canto.json")
const { ethers } = require("hardhat");
const { networks } = require("../hardhat.config")
const { CollectionConfig } = require("../config/CollectionConfig")

//console.log(JSON.stringify(contracts.abi))
//0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e'
let provider = new ethers.providers.JsonRpcProvider(networks.goerli.url)
let signer = new ethers.Wallet("586bd90ddf950a88172d27e5ec8249ba59c37902c0265f13e86c8a35429a88da", provider)
const whitelist = new ethers.Contract(CollectionConfig.contractAddress, contracts.abi, signer)


module.exports = { whitelist }