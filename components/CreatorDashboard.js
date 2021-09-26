import React from "react";
import Web3Modal from "web3modal";
import { nftaddress, nftmarketaddress } from "../config";
import UserCard from "./UserCard";
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
    const web3Modal = new Web3Modal({
      network: "mumbai",
      cacheProvider: true,
    });

    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const marketContract = new ethers.Contract(
      nftmarketaddress,
      NFTMarket.abi,
      signer
    );
    const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider);
    const data = await marketContract.fetchCreateNFTs();

    console.log(data);

    let newItems = await Promise.all(
      data.map(async (d) => {
        const tokenUri = await tokenContract.tokenURI(d.tokenId);
        const meta = await axios.get(tokenUri);
        const price = ethers.utils.formatUnits(d.price.toString(), "ether");

        return {
          price,
          tokenId: d.tokenId.toNumber(),
          seller: d.seller,
          owner: d.owner,
          image: meta.data.image,
          name: meta.data.name,
          description: meta.data.description,
        };
      })
    );
    console.log(newItems);

    setItems(newItems);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {items.length &&
        items.map((item, key) => <UserCard key={key} data={item} />)}
    </div>
  );
};

export default ItemList;
