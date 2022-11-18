require('dotenv').config();

require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: 'dev',
  networks: {
    dev: {
      url: 'http://localhost:8545',
      accounts: [process.env.PRIVATE_KEY]
    },
    goerli: {
      url: `https://goerli.infura.io/v3/` + process.env.INFURA_KEY,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
