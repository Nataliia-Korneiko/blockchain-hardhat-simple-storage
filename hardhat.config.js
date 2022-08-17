require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */

const { RINKEBY_RPC_URL, PRIVATE_KEY } = process.env;

module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 4, // Rinkeby
    },
  },
  solidity: '0.8.8',
};
