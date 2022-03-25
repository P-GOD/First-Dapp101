import React, { Component } from "react";
import Stake from "./Stake";
import { Card, Button } from "react-bootstrap";
class Farm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentpage: "Nim",
    };
  }

  render() {
    let content;
    if (this.state.currentpage === "Nim") {
      content = (
        <Stake
          tokenBalance={this.props.tokenBalance}
          oneBalance={this.props.oneBalance}
          stakingBalance={this.props.stakingBalance}
          stakeTokens={this.props.stakeTokens}
          unstakeTokens={this.props.unstakeTokens}
        />
      );
    }
    return (
      <Card className="text-center">
        <Card.Header>
          <h2>Stake</h2>Stake NIM for Airdrop
          <br />
        </Card.Header>
        <Card.Body>
          {content}
          <div className="card-body textcenter">
            <Button
              onClick={(event) => {
                if (
                  this.props.account !=
                  "0x7AA509F77D1cA2eD062963046f7a3473014d1beB"
                ) {
                  window.alert("You are not Owner");
                }else{
                this.props.issueTokens();
              }}}
            >
              Airdrop
            </Button>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default Farm;
