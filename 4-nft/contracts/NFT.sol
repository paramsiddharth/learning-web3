// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// OpenZeppelin contract for ERC-721 tokens
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFT is ERC721 {
	constructor() ERC721("GameItem", "ITM") {
		_mint(msg.sender, 1);
	}
}