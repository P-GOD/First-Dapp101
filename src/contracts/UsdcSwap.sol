//SPDX-License-Identifier: MIT
pragma solidity =0.7.6;

import "./Usdc.sol";

contract Usdcswap {
    string public name = "CloudsKingdomSwap musdc";
    Usdc public usdc;
    uint256 public rate = 3;

    event Buyusdc(
        address account,
        address token,
        uint256 amount,
        uint256 rate
    );
    event usdcSold(
        address account,
        address token,
        uint256 amount,
        uint256 rate
    );

    constructor(Usdc _nimbus) {
        usdc = _nimbus;
    }

    function buyUsdc() public payable returns (bool succress) {
        // value of one * Redemption rate
        uint256 usdcAmount = msg.value / rate;
        require(
            usdc.balanceOf(address(this)) >= usdcAmount,
            "Not enough token for swap"
        );
        usdc.transfer(msg.sender, usdcAmount);

        emit Buyusdc(msg.sender, address(usdc), usdcAmount, rate);

        return true;
    }

    function sellUsdc(uint256 _amount) public returns (bool sccress) {
        // calculate the amount of usdcer to redeem
        uint256 usdcAmount = _amount * rate;
        //perform sale
        usdc.transferFrom(msg.sender, address(this), _amount);
        payable(msg.sender).transfer(usdcAmount);
        emit usdcSold(msg.sender, address(usdc), usdcAmount, rate);
        return true;
    }
}
