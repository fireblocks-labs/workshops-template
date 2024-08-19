#### NFT Creation


1. We need to create our NFT metadata now. The metadata will have an image URL and some details about the NFT we are creating.

2. We will need to generate our NFT image first.
Let's use some AI tool to create an image. You can use whatever tool you prefer but some options (not limited to) are:
  - [Midjourney](https://www.midjourney.com/explore?tab=hot)
  - [ImagingeArt](https://www.imagine.art/)
  - [DaVinci](https://davinci.ai/)

I am going to use the following image:
![My Image](/images/my-nft-dog.png)

3. We need to upload this image somewhere so we will have a URL to add to our metadata. We will use Pinata, a convenient IPFS API and toolkit, to store our NFT asset and metadata to ensure our NFT is truly decentralized. If you don’t have a Pinata account, sign up for a free account [here](https://app.pinata.cloud/) and complete the steps to verify your email.

4. Once you’ve created an account:
  - Navigate to the `Files` page and click the blue `Upload` button at the top-left of the page.
  - Upload an image to Pinata — this will be the image asset for your NFT. Feel free to name the asset whatever you wish.
  - Once uploaded, you'll see the file info in the table on the `Files` page.
  - You'll also see a `CID` column. You can copy the `CID` by clicking the copy button next to it. You can view your upload at: https://gateway.pinata.cloud/ipfs/<CID>. 

5. In our project root directory (my-nft) create `nft-metadata.json`:

```shell
{
  "description": "<YOUR_DESCRIPTION>",
  "image": "ipfs://<IMAGE_CID>",
  "name": "<NAME>"
}
```

6. Upload the `nft-metadata.json` to Pinata the same way as the previously uploaded image.

7. In order to mint the NFT we are going to use Fireblocks Web3 Provider and Web3.js.
Install the relevant packages:
```bash
npm install web3 @fireblocks/fireblocks-web3-provider
```

7. Create `mint-nft.js` script in `scripts` directory:

```js
const {
  FireblocksWeb3Provider,
  ApiBaseUrl,
  ChainId,
} = require("@fireblocks/fireblocks-web3-provider");
const { Web3 } = require("web3");

require("dotenv").config();

const contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");

const contractAddress = "<your-NFT-contract-address>";
const metadataCID = "<your-metadata-CID>";

const mintNFT = async (URI) => {
  const eip1193Provider = new FireblocksWeb3Provider({
    chainId: ChainId.SEPOLIA,
    apiBaseUrl: ApiBaseUrl.Sandbox,
    privateKey: "<your-path-to-secret-key>",
    apiKey: "<your-api-key>",
    vaultAccountIds: "0",
  });

  const web3 = new Web3(eip1193Provider);
  const myAddr = await web3.eth.getAccounts();
  const myContract = new web3.eth.Contract(contract.abi, contractAddress);
  
  try {
    const tx = await myContract.methods.mintNFT(myAddr[0], URI).send({
      from: myAddr[0]
    })

    console.log("Mint Transaction Hash:", tx.logs[0].transactionHash)
  
  } catch (e) {
    console.log("Error Caught in Catch Statement: ", e);
  }
};

mintNFT(`https://gateway.pinata.cloud/ipfs/${metadataCID}`);
```

#### Make sure to update the following parameters:
  - `contractAddress` - this is the address of the deployed contract from the previous step
  - `metadataCID` - this is the CID of the uploaded metadata file to Pinata (do not get confused with the image CID here)
  - `privateKey` - this is the path to the Fireblocks API secrect key 
  - `apiKey` - this is the Fireblocks API key

8. Run the `mint-nft.js` script:
`node scripts/mint-nft.js`

9. Go to your Fireblocks Sandbox workspace -> `NFTs` section on the left hand sidebar and explore your newly created NFT

