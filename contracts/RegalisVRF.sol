//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "hardhat/console.sol";
import "./Base64.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";

contract RegalisVRF is ERC721, VRFConsumerBase {
    
  struct RegalisBoxes {
    uint characterIndex;
    string name;
    string imageURI;   
  }

    //mapping(bytes32 => uint256) public requestToCharacterId;
	  mapping(bytes32 => address) public requestToSender;

    //event requestedCharacter(bytes32 indexed requestId);
    event CharacterNFTMinted(address sender, uint256 tokenId, uint256 characterIndex);
  
  // The tokenId is the NFTs unique identifier, it's just a number that goes
  // 0, 1, 2, 3, etc.
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;

  bytes32 internal keyHash;
  uint256 internal fee;
  
  // TODO - uint256 public ramdomResult



  // A lil array to help us hold the default data for our characters.
  // This will be helpful when we mint new characters and need to know
  // things like their HP, AD, etc.
  RegalisBoxes[] defaultCharacters;
  
  // We create a mapping from the nft's tokenId => that NFTs attributes.
  mapping(uint256 => RegalisBoxes) public nftHolderAttributes;

  // A mapping from an address => the NFTs tokenId. Gives me an ez way
  // to store the owner of the NFT and reference it later.
  mapping(address => uint256) public nftHolders;

  // Data passed in to the contract when it's first created initializing the characters.
  // We're going to actually pass these values in from from run.js.
  constructor(
      string[] memory characterNames,
      string[] memory characterImageURIs,
      address _VRFCordinator,
      address _LinkToken,
      bytes32 _keyHash,
      uint256 _fee
      ) ERC721("Regalis", "")
      VRFConsumerBase(_VRFCordinator, _LinkToken)
      {
       keyHash = _keyHash;
       fee = _fee;   
    // Loop through all the characters, and save their values in our contract so
    // we can use them later when we mint our NFTs.
    for(uint i = 0; i < characterNames.length; i += 1) {
      defaultCharacters.push(RegalisBoxes({
        characterIndex: i,
        name: characterNames[i],
        imageURI: characterImageURIs[i]
      }));

      RegalisBoxes memory c = defaultCharacters[i];
      console.log("Done initializing %s w/ imgUri: %s,", c.name, c.imageURI);
    }
	// I increment tokenIds here so that my first NFT has an ID of 1.
    // More on this in the lesson!
    _tokenIds.increment();
  }


  function getRandomBox() public returns (bytes32) {
    require(LINK.balanceOf(address(this)) >= fee, "Not enough LINK - fill contract with faucet"); // TODO: Del faucet word production 
    bytes32 requestId = requestRandomness(keyHash, fee);
    //requestToCharacterId[requestId] = _tokenId;
    requestToSender[requestId] = msg.sender;
    return requestId;
  }	


  function fulfillRandomness(bytes32 requestId, uint256 randomness) internal override {
    address sender = requestToSender[requestId];
    uint256 caracterIndex = (randomness % defaultCharacters.length);
    mintCharacterNFT(caracterIndex,sender);
  }
  
  // Users would be able to hit this function and get their NFT based on the
  // characterId they send in!
  function mintCharacterNFT(uint _characterIndex, address _Sender) internal {
        // Get current tokenId (starts at 1 since we incremented in the constructor).
        uint256 newItemId = _tokenIds.current();
        // The magical function! Assigns the tokenId to the caller's wallet address.
        _safeMint(_Sender, newItemId);
        // We map the tokenId => their character attributes. More on this in
        // the lesson below.
            nftHolderAttributes[newItemId] = RegalisBoxes({
            characterIndex: _characterIndex,
            name: defaultCharacters[_characterIndex].name,
            imageURI: defaultCharacters[_characterIndex].imageURI
            });
            
            console.log("Minted NFT w/ tokenId %s and characterIndex %s, Character name %s", newItemId, _characterIndex);    
        // Keep an easy way to see who owns what NFT.
        nftHolders[_Sender] = newItemId;
        // Increment the tokenId for the next person that uses it.
        _tokenIds.increment();
        emit CharacterNFTMinted(_Sender, newItemId, _characterIndex);
  }



    function tokenURI(uint256 _tokenId) public view override returns (string memory) {
        RegalisBoxes memory charAttributes = nftHolderAttributes[_tokenId];    
        

        string memory json = Base64.encode(
            bytes(
            string(
                abi.encodePacked(
                '{"name": "',
                charAttributes.name,
                ' -- NFT #: ',
                Strings.toString(_tokenId),
                '", "description": "This is a NFT that was obtained in a box of regalis.", "image": "ipfs://',
                charAttributes.imageURI,'"}'        
              )
            )
          )
    );

  string memory output = string(
    abi.encodePacked("data:application/json;base64,", json)
  );
  
  return output;
  }

      function checkIfUserHasNFT() public view returns (RegalisBoxes memory) {
      // Get the tokenId of the user's character NFT
      uint256 userNftTokenId = nftHolders[msg.sender];
      // If the user has a tokenId in the map, return their character.
      if (userNftTokenId > 0) {
          return nftHolderAttributes[userNftTokenId];
      }
      // Else, return an empty character.
      else {
          RegalisBoxes memory emptyStruct;
          return emptyStruct;
          }
      }

      function getAllDefaultCharacters() public view returns (RegalisBoxes[] memory) {
      return defaultCharacters;
      }
}
