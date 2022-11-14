// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";

// Address: 0x42d4F8dB8ad1F7CB9CAC31d0F448BA8718D244cD
contract BatluToken is ERC20 {
	constructor(string memory _name, string memory _symbol) ERC20(_name, _symbol) {
		_mint(msg.sender, 10 * 10 ** 18);
	}
}