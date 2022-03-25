import React, { Component } from "react";
import tokenLogo from "./../resources/tokenLogo.png";


class Stake extends Component {


  render() {
    return (
      <div id="content" className="">
        <table className="table text-muted text-center">
          <thead>
          <tr style={{color: 'black'}}>
            <th scope="col" className="text-center">Staking Balance</th>
            <th scope="col" className="text-center">NIM Balance</th>
          </tr>
          </thead>
          <tbody>
            <tr style={{color: 'black'}}>
              <td>{window.web3.utils.fromWei(this.props.stakingBalance, 'Ether')}</td>
              <td>{window.web3.utils.fromWei(this.props.tokenBalance, 'Ether')}</td>
            </tr>
          </tbody>
        </table>
        <div className="mb-2" style={{opacity: '.9'}}>
          <form className="mb-3 " onSubmit={(event) => {
              let ethAmount
              ethAmount = this.input.value.toString()
              ethAmount = window.web3.utils.toWei(ethAmount, 'Ether')
              this.props.stakeTokens(ethAmount)
          }}>
            <div style={{borderSpace: '0 1em'}}>
              <label className="" style={{marginLeft:'15px'}}><b>Stake Tokens</b></label>
              <div className="input-group mb-4" 
              >
                <input type="text" placeholder="0"
                required className="form-control form-control-lg input-form"
                ref={(input) => { this.input = input }}
                />
                <div className="input-group-append">
                  <div className="input-group-text input-form">
                    <img src={tokenLogo} height="32" alt="" />
                    &nbsp; NIM
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-dark btn-lg btn-block rounded-pill">DEPOSIT</button>
            </div>
          </form>
          <button className="btn btn-primary btn-lg btn-block rounded-pill" 
          onClick={(event) => {
            event.preventDefault(
              this.props.unstakeTokens()
            )
          }}>WITHDRAW</button>
        </div>
      </div>
    );
  }
}

export default Stake;
