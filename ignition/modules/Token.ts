import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const TokenModule = buildModule("TokenModule", (m: any) => {
    const token = m.contract("Token");
    return { token };
});

export default TokenModule;
