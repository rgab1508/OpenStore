import React from "react";
import Web3Modal from "web3modal";
import { nftaddress, nftmarketaddress } from "../config";
import Card from "./Card";
import NFT from "../artifacts/contracts/NFT.sol/NFT.json";
import NFTMarket from "../artifacts/contracts/NFTMarket.sol/NFTMarket.json";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import axios from "axios";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getItems();
    setIsLoading(false);
  }, []);

  const getItems = async () => {
    const provider = new ethers.providers.JsonRpcProvider();
    const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider);
    const marketContract = new ethers.Contract(
      nftmarketaddress,
      NFTMarket.abi,
      provider
    );
    const data = await marketContract.getMarketItems();

    console.log(data);

    let newItems = await Promise.all(
      data.map(async (d) => {
        const tokenUri = await tokenContract.tokenURI(d.tokenId);
        const meta = await axios.get(tokenUri);
        const price = ethers.utils.formatUnits(d.price.toString(), "ether");

        return {
          tokenId: d.tokenId.toNumber(),
          seller: d.seller,
          owner: d.owner,
          image: meta.data.image,
          name: meta.data.name,
          desc: meta.data.desc,
        };
      })
    );
    console.log(newItems);

    setItems(newItems);
  };

  const buyNft = async () => {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const prov = await ethers.providers.web3Provider(connection);

    const signer = prov.getSigner();
    const contract = await ethers.Contract(
      nftmarketaddress,
      Market.abi,
      signer
    );

    const price = ethers.utils.parseUnits(nft.price.toString(), "ether");

    const transaction = await contract.createMarketSale(
      nftaddress,
      nft.tokenId,
      {
        value: price,
      }
    );
    await transaction.wait();
    getItems();
  };
  return (
    <div
      style={{
        flexDirection: "row",
      }}
    >
      {items.length &&
        items.map((item, key) => (
          <div key={key}>
            <Card data={item} />
          </div>
        ))}
    </div>
  );
};

export default ItemList;
