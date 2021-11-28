const { expect } = require("chai");
const { ethers } = require("hardhat");
const { signMetaTxRequest } = require("../src/signer");

async function deploy(name, ...params) {
  const Contract = await ethers.getContractFactory(name);
  return await Contract.deploy(...params).then(f => f.deployed());
}

describe("contracts/Regalis", function() {
  beforeEach(async function() {
    let fee = hre.ethers.utils.parseEther("0.0001");
    let linkAdress = "0x326C977E6efc84E512bB9C30f76E30c160eD06FB";
    this.forwarder = await deploy('MinimalForwarder');
    this.gaslessregalis = await deploy("Gaslessregalis",["Christmas Angel ", "Christmas Angel Blue", "Christmas Baubles", "Christmas Baubles Blue","Christmas Bear", "Christmas Bear Blue",
    "Christmas Elf", "Christmas Elf Blue","Christmas Frosty The Snowman", "Christmas Frosty The Snowman Blue", "Christmas Santas Toy Bag",
    "Christmas Santas Toy Bag Blue","Christmas Snowflakes", "Christmas Snowflakes Blue","Christmas Stockings","Christmas Stockings Blue",
    "Christmas Tree", "Christmas Tree Blue"],["QmSKoA6oj354sFzRGgj9yjgPKy4XNagTyDvYKcsFXCM12J", // Images
     "QmQEcFoLpMeJFHF7jPKzbtNNeJGRHupcvzr5NrbNkMHrGK", 
     "QmR5CR8bEmw1QWJg87BREyyXfMbi3hQDzu9dB6MogxXMHn",
      "QmQWA18bkdtrWJmj5jMrqTnZK3fJgqUAoxnNZYxSJGadh3",
      "QmRWabsHLB32XZy7KTCieXrVcfirRyQ5GCMNaKBEVNDrdz",
      "QmWcFJtGNBSbS5hbB7h91JiyGxXjemx1LbkTJnTTE6JwcS",
      "QmX9fkkYtWVdS1yXU96A5AKmUdk5coae4UzMju52VHDrCv",
      "QmSusuTtcp9MV9xF5f5QhNM8hyssfv9DbPTWus6ToLyq9D",
      "QmVVByzT1ejeCvmeNwgF2hWDUo81KzZawfy7WixynAfQCe",
      "QmePBtS8c8zdhWMyVdJPn9A4qWL6pFx5ucthjuTipuasxQ",
      "QmXZPKPZ4qCztw5a1x5xmv7hob2QanKUQs8DV43d4EFAeU",
      "Qmd1fDVEnVt4tZRV1Dd56hW4nsxwRU3rPPjSBHuh5yYU9n",
      "Qme5ZTj7gMAwvzgKyMDVy9hmUS6MTAUULoFnBaN8cv5MN2",
      "QmYZLvGwNTEfgKcPLSVWhnDA1p5xMAYEFWe2r1U7uGbBZk",
      "QmVQssLrXasCxdRPQmzvKoG9os8e3avTMYZ5UDEX5Pior1",
      "QmZzm5KfPL63csY9NbLNzDLaagXYC6cpD5NrnhVwEAkkZS",
      "QmPWobF9T499GKniYguTFiiJwsgehies2tADuUr9PSY3b4",
      "QmfCK9UL5XB7TdGAWkJALFqWe3XHJPjbemvLYrmZt2drws"],
      "0xb3dCcb4Cf7a26f6cf6B120Cf5A73875B7BBc655B", //VRF
      linkAdress, //Link Token
      "0x2ed0feb3e7fd2022120aa84fab1945545a9f2ffc9076fd6156fa96eaff4c1311", // Keyhash
      fee, this.forwarder.address);
    //this.registry = await deploy("Registry", this.forwarder.address);    
    this.accounts = await ethers.getSigners();
  });

  it("Get a regalis directly", async function() {
    const sender = this.accounts[1];   
    const regalis = await this.gaslessregalis.connect(sender);
    console.log(regalis.address);
    const receipt = await regalis.mintCharacterNFT(1).then(tx => tx.wait());
    //expect(receipt.events[0].event).to.equal('CharacterNFTMinted');

    expect(await regalis.nftHolders(this.accounts[1].address)).to.equal(1);  
    //expect(await registry.names(sender.address)).to.equal('1');
  });

  it("I Gets a regalis via Relayer", async function() {
    const signer = this.accounts[2];
    const relayer = this.accounts[3];
    const forwarder = await this.forwarder.connect(relayer);  
    console.log(this.forwarder.address);
    const regalis = await this.gaslessregalis.deployed();
    console.log(regalis.address);

    const { request, signature } = await signMetaTxRequest(signer.provider, forwarder, {
      from: signer.address,
      to: regalis.address,
      data: regalis.interface.encodeFunctionData('mintCharacterNFT', [2]),
    });
    
    await forwarder.execute(request, signature).then(tx => tx.wait());

    expect(await gaslessregalis.nftHolders(singer.address)).to.equal(1);
    console.log(gaslessregalis.nftHolders(singer.address));
    //expect(await registry.names(signer.address)).to.equal('meta-txs');
  });

 
});