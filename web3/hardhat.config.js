require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.9",
    defaultNetwork: "goerli",
    networks: {
      hardhat: {},
      goerli: {
        url: process.env.GOERLI_RPC_URL,
        accounts: [process.env.PRIVATE_KEY],
      },
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
