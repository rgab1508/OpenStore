// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.4;

// import "@openzeppelin/contracts/utils/Counters.sol";
// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
// import "@openzeppelin/contracts/security/ReentrancyGuard.sol"; // security for non-reentrant

// import "hardhat/console.sol";

// contract NFTMarket is ReentrancyGuard {
//     using Counters for Counters.Counter;
//     Counters.Counter private _itemIds; // Id for each individual item
//     Counters.Counter private _itemsSold; // Number of items sold

//     // Currency is in Matic (lower price than ethereum)
//     address payable owner; // The owner of the NFTMarket contract (transfer and send function availabe to payable addresses)
//     uint256 listingPrice = 1 ether; // This is made for owner of the file to be comissioned

//     constructor() {
//         owner = payable(msg.sender);
//     }

//     struct MarketItem {
//         uint256 itemId;
//         address nftContract;
//         uint256 tokenId;
//         address payable seller;
//         address payable owner;
//         uint256 price;
//         bool isSold;
//     }

//     mapping(uint256 => MarketItem) private idToMarketItem;

//     // Event is an inhertable contract that can be used to emit events
//     event MarketItemCreated(
//         uint256 indexed itemId,
//         address indexed nftContract,
//         uint256 indexed tokenId,
//         address seller,
//         address owner,
//         uint256 price,
//         bool isSold
//     );

//     function getListingPrice() public view returns (uint256) {
//         return listingPrice;
//     }

//     function createMarketItem(
//         address nftContract,
//         uint256 tokenId,
//         uint256 price
//     ) public payable nonReentrant {
//         require(price > 0, "No item for free here");
//         require(msg.value == price, "Price must be same as listing price");

//         _itemIds.increment();
//         uint256 itemId = _itemIds.current();
//         idToMarketItem[itemId] = MarketItem(
//             itemId,
//             nftContract,
//             tokenId,
//             payable(msg.sender),
//             payable(address(0)), // No owner for the item
//             // category,
//             price,
//             false
//         );
//         IERC721(nftContract).transferFrom(msg.sender, address(this), tokenId);

//         emit MarketItemCreated(
//             itemId,
//             nftContract,
//             tokenId,
//             msg.sender,
//             address(0),
//             // category,
//             price,
//             false
//         );
//     }

//     function createMarketSale(address nftContract, uint256 itemId)
//         public
//         payable
//         nonReentrant
//     {
//         uint256 price = idToMarketItem[itemId].price;
//         uint256 tokenId = idToMarketItem[itemId].tokenId;
//         require(
//             msg.value == price,
//             "Please make the price to be same as listing price"
//         );

//         idToMarketItem[itemId].seller.transfer(msg.value);
//         IERC721(nftContract).transferFrom(address(this), msg.sender, tokenId);
//         idToMarketItem[itemId].isSold = true;
//         idToMarketItem[itemId].owner = payable(msg.sender);
//         _itemsSold.increment();
//         payable(owner).transfer(listingPrice);
//     }

//     function getMarketItems() public view returns (MarketItem[] memory) {
//         uint256 itemCount = _itemIds.current();
//         uint256 unsoldItemCount = _itemIds.current() - _itemsSold.current();
//         uint256 currentIndex = 0;

//         MarketItem[] memory marketItems = new MarketItem[](unsoldItemCount);
//         for (uint256 i = 0; i < itemCount; i++) {
//             if (idToMarketItem[i + 1].owner == address(0)) {
//                 uint256 currentId = idToMarketItem[i + 1].itemId;
//                 MarketItem storage currentItem = idToMarketItem[currentId];
//                 marketItems[currentIndex] = currentItem;
//                 currentIndex += 1;
//             }
//         }
//         return marketItems;
//     }

//     function fetchPurchasedNFTs() public view returns (MarketItem[] memory) {
//         uint256 totalItemCount = _itemIds.current();
//         uint256 itemCount = 0;
//         uint256 currentIndex = 0;

//         for (uint256 i = 0; i < totalItemCount; i++) {
//             if (idToMarketItem[i + 1].owner == msg.sender) {
//                 itemCount += 1;
//             }
//         }

//         MarketItem[] memory marketItems = new MarketItem[](itemCount);
//         for (uint256 i = 0; i < totalItemCount; i++) {
//             if (idToMarketItem[i + 1].owner == msg.sender) {
//                 uint256 currentId = idToMarketItem[i + 1].itemId;
//                 MarketItem storage currentItem = idToMarketItem[currentId];
//                 marketItems[currentIndex] = currentItem;
//                 currentIndex += 1;
//             }
//         }
//         return marketItems;
//     }

//     function fetchCreateNFTs() public view returns (MarketItem[] memory) {
//         uint256 totalItemCount = _itemIds.current();
//         uint256 itemCount = 0;
//         uint256 currentIndex = 0;

//         for (uint256 i = 0; i < totalItemCount; i++) {
//             if (idToMarketItem[i + 1].seller == msg.sender) {
//                 itemCount += 1; // No dynamic length. Predefined length has to be made
//             }
//         }

//         MarketItem[] memory marketItems = new MarketItem[](itemCount);
//         for (uint256 i = 0; i < totalItemCount; i++) {
//             if (idToMarketItem[i + 1].seller == msg.sender) {
//                 uint256 currentId = idToMarketItem[i + 1].itemId;
//                 MarketItem storage currentItem = idToMarketItem[currentId];
//                 marketItems[currentIndex] = currentItem;
//                 currentIndex += 1;
//             }
//         }
//         return marketItems;
//     }
// }

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract NFTMarket is ReentrancyGuard{
    using Counters for Counters.Counter;
    Counters.Counter private _itemIds;
    Counters.Counter private _itemsSold;

    address payable owner;
    uint256 listingPrice = 0.025 ether;

    constructor(){
        owner = payable(msg.sender);
    }

    struct MarketItem{
        uint ItemId;
        address nftContract;
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;
    }

    mapping(uint256 => MarketItem) private idToMarketItem;

    event MarketItemCreated(
        uint indexed itemId,
        address indexed nftContract,
        uint256 indexed tokenId,
        address seller,
        address owner,
        uint256 price,
        bool sold
    );

    function getListingPrice() public view returns (uint256) {
        return listingPrice;
    }

    function createMarketItem(
    address nftContract,
    uint256 tokenId,
    uint256 price) public payable nonReentrant{
        require(price > 0, "Price must be atleat 1 wei");
        require(msg.value == listingPrice, "Price must be equal to listing price");

        _itemIds.increment();
        uint256 itemId = _itemIds.current();    

        idToMarketItem[itemId] = MarketItem(
            itemId,
            nftContract,
            tokenId,
            payable(msg.sender),
            payable(address(0)),
            price,
            false
        );

        IERC721(nftContract).transferFrom(msg.sender, address(this), tokenId);

        emit MarketItemCreated(
            itemId, 
            nftContract, 
            tokenId, 
            msg.sender, 
            address(0), 
            price, 
            false
            );
    }
    /* Creates the sale of a marketplace item */
    /* Transfers ownership of the item, as well as funds between parties */
    function createMarketSale(
        address nftContract,
        uint256 itemId
        ) public payable nonReentrant {
        uint price = idToMarketItem[itemId].price;
        uint tokenId = idToMarketItem[itemId].tokenId;
        require(msg.value == price, "Please submit the asking price in order to complete the purchase");

        idToMarketItem[itemId].seller.transfer(msg.value);
        IERC721(nftContract).transferFrom(address(this), msg.sender, tokenId);
        idToMarketItem[itemId].owner = payable(msg.sender);
        idToMarketItem[itemId].sold = true;
        _itemsSold.increment();
        payable(owner).transfer(listingPrice);
    }
        
    // nonReentrant is called modifier


    /* Returns all unsold market items */
    function fetchMarketItems() public view returns (MarketItem[] memory) {
        uint itemCount = _itemIds.current();
        uint unsoldItemCount = _itemIds.current() - _itemsSold.current();
        uint currentIndex = 0;

        MarketItem[] memory items = new MarketItem[](unsoldItemCount);
        for (uint i = 0; i < itemCount; i++) {
        if (idToMarketItem[i + 1].owner == address(0)) {
            uint currentId = i + 1;
            MarketItem storage currentItem = idToMarketItem[currentId];
            items[currentIndex] = currentItem;
            currentIndex += 1;
        }
        }
        return items;
    }

    /* Returns only items that a user has purchased */
    function fetchMyNFTs() public view returns (MarketItem[] memory) {
        uint totalItemCount = _itemIds.current();
        uint itemCount = 0;
        uint currentIndex = 0;

        for (uint i = 0; i < totalItemCount; i++) {
        if (idToMarketItem[i + 1].owner == msg.sender) {
            itemCount += 1;
        }
        }
        MarketItem[] memory items = new MarketItem[](itemCount);
        for (uint i = 0; i < totalItemCount; i++) {
            if (idToMarketItem[i + 1].owner == msg.sender) {
                uint currentId = i + 1;
                MarketItem storage currentItem = idToMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    /* Returns only items a user has created */
    function fetchItemsCreated() public view returns (MarketItem[] memory) {
        uint totalItemCount = _itemIds.current();
        uint itemCount = 0;
        uint currentIndex = 0;

        for (uint i = 0; i < totalItemCount; i++) {
        if (idToMarketItem[i + 1].seller == msg.sender) {
            itemCount += 1;
        }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);
        for (uint i = 0; i < totalItemCount; i++) {
        if (idToMarketItem[i + 1].seller == msg.sender) {
            uint currentId = i + 1;
            MarketItem storage currentItem = idToMarketItem[currentId];
            items[currentIndex] = currentItem;
            currentIndex += 1;
        }
<<<<<<< HEAD
        }
        return items;
  }

}
=======
        return marketItems;
    }

    function getItemsByCategory(string calldata category)
        public
        view
        returns (MarketItem[] memory)
    {
        uint256 totalItemCount = _itemIds.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for (uint256 i = 0; i < totalItemCount; i++) {
            if (
                keccak256(abi.encodePacked(idToMarketItem[i + 1].category)) ==
                keccak256(abi.encodePacked(category))
            ) {
                itemCount += 1;
            }
        }

        MarketItem[] memory marketItems = new MarketItem[](itemCount);
        for (uint256 i = 0; i < totalItemCount; i++) {
            if (
                keccak256(abi.encodePacked(idToMarketItem[i + 1].category)) ==
                keccak256(abi.encodePacked(category))
            ) {
                uint256 currentId = idToMarketItem[i + 1].itemId;
                MarketItem storage currentItem = idToMarketItem[currentId];
                marketItems[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return marketItems;
    }
}
>>>>>>> cc64109f7f20e915eb9a7850381a88d6c308702c
