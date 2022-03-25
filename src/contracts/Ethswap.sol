//SPDX-License-Identifier: MIT
pragma solidity =0.7.6;

import "./Ether.sol";

contract Ethswap {
    string public name = "CloudsKingdomSwap mEth";
    Ether public eth;
    uint256 public rate = 1;

    event BuyEther(
        address account,
        address token,
        uint256 amount,
        uint256 rate
    );
    event EtherSold(
        address account,
        address token,
        uint256 amount,
        uint256 rate
    );

    constructor(Ether _nimbus) {
        eth = _nimbus;
    }

    function buyEther() public payable returns (bool succress) {
        // value of one * Redemption rate
        uint256 ethAmount = msg.value * rate;
        require(
            eth.balanceOf(address(this)) >= ethAmount,
            "Not enough token for swap"
        );
        eth.transfer(msg.sender, ethAmount);

        emit BuyEther(msg.sender, address(eth), ethAmount, rate);

        return true;
    }

    function sellEther(uint256 _amount) public returns (bool sccress) {
        // calculate the amount of Ether to redeem
        uint256 etherAmount = _amount / rate;
        //perform sale
        eth.transferFrom(msg.sender, address(this), _amount);
        payable(msg.sender).transfer(etherAmount);
        emit EtherSold(msg.sender, address(eth), etherAmount, rate);
        return true;
    }
}
