const main = async () => {

async function deploy(name, ...params) {
    const Contract = await ethers.getContractFactory(name);
    return await Contract.deploy(...params).then(f => f.deployed());
  }

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

    console.log(fee);
    let txn;
    let returnedTokenURI;
    await this.forwarder.deployed();
    console.log("Forwarded doployed to:", this.forwarder.address);
    await this.gaslessregalis.deployed();    
    console.log("Contract deployed to:", this.gaslessregalis.address);
    //txt = await LinkTokenInterface.transfer(regalisContract.address, hre.ethers.utils.parseEther("1"));
    //await txt.wait();     
    txn = await this.gaslessregalis.getAllDefaultCharacters();
    console.log(txn); 

};

const runMain = async () => {

  try {

          await main();

          process.exit(0);

        } catch (error) {

                console.log(error);

                process.exit(1);

              }

};



runMain();