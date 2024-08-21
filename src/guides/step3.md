### Let's add our Smart Contract:

1. In the contracts directory, create a file called "MyNFT.sol" and paste the following contract code:

```js
//Contract based on [https://docs.openzeppelin.com/contracts/3.x/erc721](https://docs.openzeppelin.com/contracts/3.x/erc721)
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract MyNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("MyNFT", "NFT") {}

    function mintNFT(address recipient, string memory tokenURI)
        public onlyOwner
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }
}
```

2. We are using OpenZeppelin here so let's run:
```bash
npm install @openzeppelin/contracts@4.8.1
```

3. Compile our contract:
```bash
npx hardhat compile
```

The output might contain some warning messages, you can ignore these. 
You are fine as long the final line of the ouput is:
```bash
Compiled 14 Solidity files successfully (evm target: istanbul).
```
