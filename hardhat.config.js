require('@nomicfoundation/hardhat-toolbox');
require('@nomiclabs/hardhat-etherscan');
require('hardhat-gas-reporter');
require('./tasks/block-number');
require('solidity-coverage');
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */

const {
  RINKEBY_RPC_URL = '',
  PRIVATE_KEY = '',
  ETHERSCAN_API_KEY = '',
  COINMARKETCAP_API_KEY = '',
} = process.env;

module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 4, // Rinkeby
    },
    localhost: {
      url: 'http://127.0.0.1:8545/',
      chainId: 31337,
    },
  },
  solidity: '0.8.8',
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  gasReporter: {
    enabled: true,
    noColors: true,
    outputFile: 'gas-report.txt',
    currency: 'USD',
    coinmarketcap: COINMARKETCAP_API_KEY,
    // token: 'MATIC', // prise in MATIC
  },
};
