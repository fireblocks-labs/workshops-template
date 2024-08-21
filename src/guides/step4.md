#### In this section we are going to write our Smart Contract deployment script and actually deploy our Smart Contract through your Fireblocks wallet!

1.Create `deploy.js` file in the `scripts` directory and write our deploy script:
```js
const hre = require("hardhat");

async function main() {
  const factory = await hre.ethers.getContractFactory("MyNFT");
  const contract = await factory.deploy();
  const receipt = await contract.waitForDeployment()

  console.log("Contract deployed to:", await receipt.getAddress());
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```

2. Install ethers.js:
```bash
npm install --save-dev ethers
```

3. Deploy our contract to Sepolia:
```bash
npx hardhat --network sepolia run scripts/deploy.js
```

### Make sure to save the address of the contract!


