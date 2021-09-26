import { useState } from "react";
import { ethers } from "ethers";
import { create as ipfsHttpClient } from "ipfs-http-client";
import { useRouter } from "next/router";
import Image from "next/image";
import Web3Modal from "web3modal";

const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");

import { nftaddress, nftmarketaddress } from "../config";

import NFT from "../artifacts/contracts/NFT.sol/NFT.json";
import NFTMarket from "../artifacts/contracts/NFTMarket.sol/NFTMarket.json";

export default function CreateItem() {
  const [values, setValues] = useState({
    price: "",
    name: "",
    fileUrl: null,
    desc: "",
  });
  const router = useRouter();

  async function onChange(e) {
    const file = e.target.files[0];
    try {
      const added = await client.add(file, {
        progress: (prog) => console.log(`received: ${prog}`),
      });
      const fileUrl = `https://ipfs.infura.io/ipfs/${added.path}`;
      setValues({ ...values, fileUrl });
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }
  async function createMarket() {
    const { name, desc, price, fileUrl } = values;
    if (!name || !desc || !price || !fileUrl) return;
    /* first, upload to IPFS */
    const data = JSON.stringify({
      name,
      desc,
      image: fileUrl,
    });
    try {
      const added = await client.add(data);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      /* after file is uploaded to IPFS, pass the URL to save it on Polygon */
      createSale(url);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }

  async function createSale(url) {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    /* next, create the item */
    let contract = new ethers.Contract(nftaddress, NFT.abi, signer);
    let transaction = await contract.createToken(url);
    let tx = await transaction.wait();
    let event = tx.events[0];
    let value = event.args[2];
    let tokenId = value.toNumber();

    const price = ethers.utils.parseUnits(values.price, "ether");

    /* then list the item for sale on the marketplace */
    contract = new ethers.Contract(nftmarketaddress, NFTMarket.abi, signer);
    let listingPrice = await contract.getListingPrice();
    listingPrice = listingPrice.toString();

    transaction = await contract.createMarketItem(nftaddress, tokenId, price, {
      value: listingPrice,
    });
    await transaction.wait();
    router.push("/");
  }

  const handleChange = (e) => {
    setValues((prevValues) => {
      return {
        ...prevValues,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div className="flex justify-center">
      <div className="w-1/2 flex flex-col pb-12">
        <input
          placeholder="Asset Name"
          className="mt-8 border rounded p-4"
          name="name"
          onChange={handleChange}
        />
        <textarea
          placeholder="Asset Description"
          className="mt-2 border rounded p-4"
          name="desc"
          onChange={handleChange}
        />
        <input
          placeholder="Asset Price in Eth"
          className="mt-2 border rounded p-4"
          name="price"
          onChange={handleChange}
        />
        <input type="file" name="Asset" className="my-4" onChange={onChange} />
        {values.fileUrl && (
          <Image
            className="rounded mt-4"
            height="350"
            alt="product Image"
            width="350"
            src={values.fileUrl}
          />
        )}
        <button
          onClick={createMarket}
          className="font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg"
        >
          Create Digital Asset
        </button>
      </div>
    </div>
  );
}
