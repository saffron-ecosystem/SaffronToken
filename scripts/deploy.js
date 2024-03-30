// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.


const {ethers,upgrades} = require("hardhat");

async function main() {

    const NUM1 = await ethers.getContractFactory("Saffron");
    console.log("Saffron version 1");

    const num1 = await upgrades.deployProxy(NUM1,["0xFAa452CB2528801eF06Ff4eD1fb9BFED93C73DD1"],{initializer:"initialize",});
    await num1.waitForDeployment();
    console.log("Saffron deployed address :",num1.target);

  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
