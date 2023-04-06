require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();
require("./task/block-number")
require("hardhat-gas-reporter")
require("./task/accounts")
//const { task } = require('hardhat')



const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const LOCALHOST_PRIVATE_KEY = process.env.LOCALHOST_PRIVATE_KEY
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  solidity: "0.8.9",
  networks: {
    hardhat: {},
  goerli: {
    url: GOERLI_RPC_URL,
    accounts: [GOERLI_PRIVATE_KEY],
    chainId: 5,
  },

  localhost: {
    url: 'http://127.0.0.1:8545',
    accounts: [LOCALHOST_PRIVATE_KEY],
    chainId: 31337,
  },
  },
  etherscan: {
    apiKey: {
        goerli: ETHERSCAN_API_KEY,
    },
},

  gasReporter: {
    enable: true,
    outputFile: "gas-report.txt",
    noColors: true,
    currency: "USD",
    //coinmarketcap api
    apiKey: [COINMARKETCAP_API_KEY],
    //gas price for a specific evm token
    token: "CANTO",
  }
};
