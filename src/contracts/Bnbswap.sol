//SPDX-License-Identifier: MIT
pragma solidity =0.7.6;

import "./Binance.sol";

contract Bnbswap {
    string public name = "CloudsKingdomSwap mBNB";
    Binance public bnb;
    uint256 public rate = 1;

    event BuyBinance(
        address account,
        address token,
        uint256 amount,
        uint256 rate
    );
    event BinanceSold(
        address account,
        address token,
        uint256 amount,
        uint256 rate
    );

    constructor(Binance _nimbus) {
        bnb = _nimbus;
    }

    function buyBinance() public payable returns (bool succress) {
        // value of one * Redemption rate
        uint256 bnbAmount = msg.value * rate;
        require(
            bnb.balanceOf(address(this)) >= bnbAmount,
            "Not enough token for swap"
        );
        bnb.transfer(msg.sender, bnbAmount);

        emit BuyBinance(msg.sender, address(bnb), bnbAmount, rate);

        return true;
    }

    function sellBinance(uint256 _amount) public returns (bool sccress) {
        // calculate the amount of Ether to redeem
        uint256 etherAmount = _amount / rate;
        //perform sale
        bnb.transferFrom(msg.sender, address(this), _amount);
        payable(msg.sender).transfer(etherAmount);
        emit BinanceSold(msg.sender, address(bnb), etherAmount, rate);
        return true;
    }
}
