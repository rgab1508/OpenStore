// const { getContractFactory } = require("@nomiclabs/hardhat-ethers/types");
// const { expect } = require("chai");
// const { ethers } = require("hardhat");

// describe("NFTMarket", function () {
//   it("Should create and execute market sales", async function () {
//     // Deploy both NFT and Market contracts
//     const Market = await ethers.getContractFactory("NFTMarket");
//     const market = await Market.deploy();
//     await market.deployed();
//     const marketAddress = market.address;

//     const NFT = await ethers.getContractFactory("NFT");
//     const nft = await NFT.deploy(marketAddress);
//     await nft.deployed();
//     const nftContractAddress = nft.address;

//     let listingPrice = await market.getListingPrice();
//     listingPrice = listingPrice.toString();
//     console.log("listingPrice", listingPrice);

//     const auctionPrice = ethers.utils.parseUnits("1", "ether");
//     console.log("auctionPrice", auctionPrice);

//     await nft.createToken("https://www.mytokenlocation.com");
//     await nft.createToken("https://www.mytokenlocation2.com");

//     await market.createMarketItem(nftContractAddress, 1, auctionPrice, {
//       value: listingPrice,
//     });
//     await market.createMarketItem(nftContractAddress, 2, auctionPrice, {
//       value: listingPrice,
//     });

//     const [_, buyerAddress] = await ethers.getSigners();

//     await market
//       .connect(buyerAddress)
//       .createMarketSale(nftContractAddress, 1, { value: auctionPrice });

//     let items = await market.getMarketItems();

//     items = await Promise.all(
//       items.map(async (item) => {
//         const tokenUri = await nft.tokenURI(item.tokenId);
//         let i = {
//           price: item.price.toString(),
//           tokenId: item.tokenId.toString(),
//           seller: item.seller,
//           owner: item.owner,
//           sold: item.sold,
//           tokenUri,
//         };
//         return i;
//       })
//     );

//     console.log("items: ", items);
//   });
// });

const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NFTMarket", function () {
  it("Should create and execute market sales", async function () {
    const Market = await ethers.getContractFactory("NFTMarket")
    const market = await Market.deploy()
    await market.deployed()
    const marketAddress = market.address

    const NFT = await ethers.getContractFactory("NFT")
    const nft = await NFT.deploy(marketAddress)
    await nft.deployed()
    const nftContractAddress = nft.address

    let listingPrice = await market.getListingPrice()
    listingPrice = listingPrice.toString()

    const auctionPrice = ethers.utils.parseUnits('100', 'ether')

    await nft.createToken("https://www.mytokenlocation.com")
    await nft.createToken("https://www.mytokenlocation2.com")
  
    await market.createMarketItem(nftContractAddress, 1, auctionPrice, { value: listingPrice })
    await market.createMarketItem(nftContractAddress, 2, auctionPrice, { value: listingPrice })
    
    const [_, buyerAddress] = await ethers.getSigners()

    await market.connect(buyerAddress).createMarketSale(nftContractAddress, 1, { value: auctionPrice})

    items = await market.getMarketItems()
    items = await Promise.all(items.map(async i => {
      const tokenUri = await nft.tokenURI(i.tokenId)
      let item = {
        price: i.price.toString(),
        tokenId: i.tokenId.toString(),
        seller: i.seller,
        owner: i.owner,
        tokenUri
      }
      return item
    }))
    console.log('items: ', items)
  });
});


