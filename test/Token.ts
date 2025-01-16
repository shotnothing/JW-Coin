import { ethers } from "hardhat";

const { expect } = require("chai");

describe("Token contract", function () {
    it("Should transfer tokens between accounts", async function () {
        const [owner, addr1, addr2] = await ethers.getSigners();
        const hardhatToken = await ethers.deployContract("Token");
        await hardhatToken.transfer(addr1.address, 50);
        expect(await hardhatToken.balanceOf(addr1.address)).to.equal(50);
        await hardhatToken.connect(addr1).transfer(addr2.address, 50);
        expect(await hardhatToken.balanceOf(addr2.address)).to.equal(50);
    });
});
