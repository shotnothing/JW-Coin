import { HardhatUserConfig } from "hardhat/config";
import { vars } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

console.log(vars.get("INFURA_API_KEY"));
console.log(vars.get("SEPOLIA_PRIVATE_KEY"));

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${vars.get("INFURA_API_KEY")}`,
      accounts: [vars.get("SEPOLIA_PRIVATE_KEY")],
    },
  },
};

export default config;
