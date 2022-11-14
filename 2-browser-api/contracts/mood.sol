// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

contract MoodDiary {
	string mood = "Empty";

	function setMood(string memory _mood) public {
		mood = _mood;
	}

	function getMood() view public returns (string memory) {
		return mood;
	}
}