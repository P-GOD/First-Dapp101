//SPDX-License-Identifier: MIT
pragma solidity =0.7.6;

import "./Tether.sol";

contract Cloudswap {
    string public name = "CloudsKingdomSwap mUSDT";
    Tether public tether;
    uint256 public rate = 0.5;

    event BuyTether(
        address account,
        address token,
        uint256 amount,
        uint256 rate
    );
    event TetherSold(
        address account,
        address token,
        uint256 amount,
        uint256 rate
    );

    constructor(Tether _nimbus) {
        tether = _nimbus;
    }

    function buyTether() public payable returns (bool succress) {
        // value of one * Redemption rate
        uint256 tetherAmount = msg.value * rate;
        require(
            tether.balanceOf(address(this)) >= tetherAmount,
            "Not enough token for swap"
        );
        tether.transfer(msg.sender, tetherAmount);

        emit BuyTether(msg.sender, address(tether), tetherAmount, rate);

        return true;
    }

    function sellNimbus(uint256 _amount) public returns (bool sccress) {
        // calculate the amount of Avax to redeem
        uint256 etherAmount = _amount / rate;
        //perform sale
        nimbus.transferFrom(msg.sender, address(this), _amount);
        payable(msg.sender).transfer(etherAmount);
        emit NimbusSold(msg.sender, address(nimbus), etherAmount, rate);
        return true;
    }
}
