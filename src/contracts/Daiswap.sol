//SPDX-License-Identifier: MIT
pragma solidity =0.7.6;

import "./Dai.sol";

contract Daiswap {
    string public name = "CloudsKingdomSwap mdai";
    Dai public dai;
    uint256 public rate = 3;

    event BuyDai(address account, address token, uint256 amount, uint256 rate);
    event DaiSold(address account, address token, uint256 amount, uint256 rate);

    constructor(Dai _nimbus) {
        dai = _nimbus;
    }

    function buyDai() public payable returns (bool succress) {
        // value of one * Redemption rate
        uint256 daiAmount = msg.value * rate;
        require(
            dai.balanceOf(address(this)) >= daiAmount,
            "Not enough token for swap"
        );
        dai.transfer(msg.sender, daiAmount);

        emit BuyDai(msg.sender, address(dai), daiAmount, rate);

        return true;
    }

    function sellDai(uint256 _amount) public returns (bool sccress) {
        // calculate the amount of Ether to redeem
        uint256 etherAmount = _amount / rate;
        //perform sale
        dai.transferFrom(msg.sender, address(this), _amount);
        payable(msg.sender).transfer(etherAmount);
        emit DaiSold(msg.sender, address(dai), etherAmount, rate);
        return true;
    }
}
