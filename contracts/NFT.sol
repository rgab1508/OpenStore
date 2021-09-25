// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds; // Tracking the no of tokens minted
    address contractAddress; // Address to allow NFT to be interacted with

    constructor(address marketPlaceAddress) ERC721("OpenStore Tokens", "OST") {
        contractAddress = marketPlaceAddress;
    }

    // This function is called when the token is to be created
    function createToken(string memory tokenURI) public returns (uint256) {
        _tokenIds.increment(); // Increment the tokenIds counter
        uint256 newTokenId = _tokenIds.current(); // The new token id is the current value of the counter
        _mint(msg.sender, newTokenId); // mint the token to the sender
        _setTokenURI(newTokenId, tokenURI); // set the tokenURI to the tokenId.
        setApprovalForAll(contractAddress, true); // set the contract as an approved token

        return newTokenId;
    }
}
