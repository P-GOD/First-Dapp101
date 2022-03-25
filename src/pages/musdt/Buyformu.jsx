import React, { Component } from "react";
import tokenLogo from "./../../resources/Tether.png";
import oneLogo from "./../../resources/logo_harmony.png";
import "./../../components/App.css";

class Buyform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      output: "0",
    };
  }

  render() {
    return (
      <form
        className="mb-3"
        onSubmit={(event) => {
          event.preventDefault();
          let etherAmount;
          etherAmount = this.input.value.toString();
          etherAmount = window.web3.utils.toWei(etherAmount, "Ether");
          this.props.buyTether(etherAmount);
        }}
      >
        <div>
          <label className="float-left">
            <b>Input</b>
          </label>
          <span className="float-right text-muted">
            Balance: {window.web3.utils.fromWei(this.props.oneBalance)}
          </span>
        </div>
        <div className="input-group mb-4">
          <input
            type="text"
            onChange={(event) => {
              const oneAmount = this.input.value.toString();
              this.setState({
                output: oneAmount * 1,
              });
            }}
            ref={(input) => {
              this.input = input;
            }}
            className="form-control form-control-lg input-form"
            placeholder="0"
            required
          />
          <div className="input-group-append">
            <div className="input-group-text input-form">
              <img src={oneLogo} height="32" alt="" />
              &nbsp;&nbsp;&nbsp; ONE
            </div>
          </div>
        </div>
        <div>
          <div className="hei"></div>
          <label className="float-left">
            <b>Output</b>
          </label>
          <span className="float-right text-muted">
            Balance: {window.web3.utils.fromWei(this.props.usdtBalance.toString())}
          </span>
        </div>
        <div className="input-group mb-2">
          <input
            type="text"
            className="form-control form-control-lg input-form"
            placeholder="0"
            value={this.state.output}
            disabled
          />
          <div className="input-group-append">
            <div className="input-group-text input-form">
              <img src={tokenLogo} height="32" alt="" />
              &nbsp; mUSDT
            </div>
          </div>
        </div>
        <div className="mb-5">
          <span className="float-left text-muted">Exchange Rate</span>
          <span className="float-right text-muted">1 ONE = 1 mUSDT</span>
        </div>
        <button type="submit" className="btn">
          <span className="">SWAP!</span>
        </button>
      </form>
    );
  }
}

export default Buyform;
