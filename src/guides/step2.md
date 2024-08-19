### What is Hardhat?
> Hardhat is a development environment to compile, deploy, test, and debug your Ethereum software. Learn more in the [official documentation](https://hardhat.org/)

Let's install and setup Hardhat!

1. Inside our `my-nft` project run:
```bash
npm install --save-dev hardhat
```

2. Install `hardhat-toolbox`:
```bash
npm install @nomicfoundation/hardhat-toolbox
```

3. Create Hardhat project:
```bash
npx hardhat
```

4. Select `create an empty hardhat.config.js`


5. Create project folders:
```bash
mkdir contracts
```

```bash
mkdir scripts
```

- `contracts/` is where we’ll keep our NFT smart contract code
- `scripts/` is where we’ll keep scripts to deploy and interact with our smart contract

6. Install the Fireblocks Hardhat Plugin. You can learn more about it in [the following guide](https://developers.fireblocks.com/reference/hardhat-plugin):
```bash
npm install @fireblocks/hardhat-fireblocks
```

7. Update `hardhat.config.js` file:

```js
require("@nomicfoundation/hardhat-toolbox");
require("@fireblocks/hardhat-fireblocks");
const { ApiBaseUrl } = require("@fireblocks/fireblocks-web3-provider");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.1",
  networks: {
    sepolia: {
      url: "https://ethereum-sepolia-rpc.publicnode.com",
      fireblocks: {
        apiBaseUrl: ApiBaseUrl.Sandbox,
        privateKey: "<private key location>",
        apiKey: "<your api key>",
        vaultAccountIds: "0",
      },
    },
  },
};
```

