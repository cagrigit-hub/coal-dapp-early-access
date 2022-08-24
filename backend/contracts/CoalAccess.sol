//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract CoalAccess {
    uint256 public constant LIMIT = 100;
    uint256 public currentUserCount = 0;
    mapping(uint256 => address) public users;
    mapping(address => uint256) public checkUsers;

    modifier countCheck() {
        require(checkUsers[msg.sender] != 1, "User already exists.");
        require(currentUserCount <= LIMIT, "Access list is closed.");
        _;
    }

    function register() public countCheck returns (bool) {
        address currentUser = msg.sender;
        users[currentUserCount] = currentUser;
        checkUsers[currentUser] = 1;
        currentUserCount += 1;
        return true;
    }
}
