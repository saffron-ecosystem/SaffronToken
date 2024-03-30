const {ethers,upgrades} = require("hardhat");

async function main() {
    const HelloWorld_NEW = await ethers.getContractFactory("Saffron");
    console.log(" Saffron is upgrading");

    await upgrades.upgradeProxy("0xa0e2B472Ad04de673266263547a8d04643594e23",HelloWorld_NEW)
    console.log("Saffron upgraded Success");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
  