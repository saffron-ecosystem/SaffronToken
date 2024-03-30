require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades');
/** @type import('hardhat/config').HardhatUserConfig */
require('dotenv').config()

module.exports = {
  solidity:{
    version:"0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      viaIR: true,
    },
  },
  contractSizer: {
    alphaSort: true,
    runOnCompile: true,
    disambiguatePaths: false,
  },

  networks:{
    sepolia:{
      url:`https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY_SEPOLIA}`,
      accounts:[`${process.env.PRIVATE_KEY}`],
    },
    polytest:{
      url:`https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY_POLY_TEST}`,
      accounts:[`${process.env.PRIVATE_KEY}`],
    },
    polygon:{
      url:`https://polygon-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY_POLY_MAINNET}`,
      accounts:[`${process.env.PRIVATE_KEY}`],
    },
    testnet: {
      url: `https://data-seed-prebsc-1-s1.bnbchain.org:8545`,
      accounts:[`${process.env.PRIVATE_KEY}`],
    },
    mainnet: {
      url: `https://bsc-dataseed.bnbchain.org/`,
      accounts:[`${process.env.PRIVATE_KEY}`],
    }
  },
  etherscan:{
    apiKey:{
      sepolia:`TFAFK1DJ4W2DI6DD214ZBH2Z69573WVE6Z`,
      polygonMumbai:`JJK7VVHEAY87BNZS121HEP5KEDVVUQDJBA`,
      polygon:`JJK7VVHEAY87BNZS121HEP5KEDVVUQDJBA`,
      bscTestnet:'X33HZ34YY7APW2NCVFX394QNHEUE1QG89Z',
      mainnet:'X33HZ34YY7APW2NCVFX394QNHEUE1QG89Z',
    }
  }
};
