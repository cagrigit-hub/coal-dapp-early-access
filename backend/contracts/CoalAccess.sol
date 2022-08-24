//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract CoalAccess {
    // CHOOSED CONSTANT TO MAKE OUR CONTRACT MORE GAS OPTIMIZED
    // Max user allowed to early access
    uint256 public constant LIMIT = 100;
    // TO KEEP TRACK OF CURRENT USER NUMBER
    uint256 public currentUserCount = 0;
    // To keep track of users
    mapping(uint256 => address) public users;
    // To prevent duplicate users
    mapping(address => uint256) public checkUsers;

    modifier countCheck() {
        // Checking if user exists
        require(checkUsers[msg.sender] != 1, "User already exists.");
        // Checking if limit is passed
        require(currentUserCount < LIMIT, "Access list is closed.");
        _;
    }

    // Registering by address of user
    function register() public countCheck returns (bool) {
        address currentUser = msg.sender;
        users[currentUserCount] = currentUser;
        checkUsers[currentUser] = 1;
        currentUserCount += 1;
        return true;
    }
}
