import hre from 'hardhat';

async function main() {
  console.log(`Deploying to network: ${hre.network.name}`);
  const deployedContract = await hre.ethers.deployContract('NFT');
  await deployedContract.waitForDeployment();
  const contractAddress = await deployedContract.getAddress();
  console.log(`NFT contract deployed to ${contractAddress}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
