require("@nomiclabs/hardhat-waffle");
const fs = require("fs");

const projectId = "cfc0ba400dcf4a2ca14edff9f68620fd"; //For first commit. Use .env file to store projectId
const pk = fs.readFileSync(".secret").toString();
module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: [pk],
    },
  },
  solidity: "0.8.4",
};
