const main = async () => {

    let fee = hre.ethers.utils.parseEther("0.0001");
    let linkAdress = "0x326C977E6efc84E512bB9C30f76E30c160eD06FB";
    const regalisContractFactory = await hre.ethers.getContractFactory('RegalisVRF');
    //const LinkTokenInterface = await hre.ethers.getContractAt(linkAdress,'LinkTokenInterface', signer);
    //const LinkContract = LinkTokenInterface.attach(linkAdress);
    const regalisContract = await regalisContractFactory.deploy(
      ["Christmas Angel ", "Christmas Angel Blue", "Christmas Baubles", "Christmas Baubles Blue","Christmas Bear", "Christmas Bear Blue",
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
        "0x8C7382F9D8f56b33781fE506E897a4F1e2d17255", //VRF
        linkAdress, //Link Token
        "0x6e75b569a01ef56d18cab6a8e71e6600d6ce853834d4a5748b720d06f878b3a4", // Keyhash
        fee
);  
    
    console.log(fee);
    let txn;
    let returnedTokenURI;
    await regalisContract.deployed();
    console.log("Contract deployed to:", regalisContract.address);
    //txt = await LinkTokenInterface.transfer(regalisContract.address, hre.ethers.utils.parseEther("1"));
    //await txt.wait();    

    txn = await regalisContract.getAllDefaultCharacters();
    console.log(txn);

    //txn = await regalisContract.getRandomBox();
    //await txn.wait();

// Get the value of the NFT's URI.
    //returnedTokenUri = await regalisContract.tokenURI(1);
    //console.log("Token URI:", returnedTokenUri);
    
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



