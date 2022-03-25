import React, { Component } from "react";
import Buyformu from "./Buyformu";
import Sellformu from "./Sellformu";
import { Card, Button } from "react-bootstrap";
import { AiOutlineSwap } from "react-icons/ai";
import "./../../components/App.css";
import { MoDal } from "./../../components/MoDal";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentForm: "buy",
      show: false,
      handleClose: () => this.setState({ show: false }),
      handleShow: () => this.setState({ show: true }),
    };
  }

  render() {
    let content;
    if (this.state.currentForm === "buy") {
      content = (
        <Buyformu
          oneBalance={this.props.oneBalance}
          bnbBalance={this.props.bnbBalance}
          buyBinance={this.props.buyBinance}
        />
      );
    } else {
      content = (
        <Sellformu
          oneBalance={this.props.oneBalance}
          bnbBalance={this.props.bnbBalance}
          sellBinance={this.props.sellBinance}
        />
      );
    }

    return (
      <Card className="text-center">
        <button
          className="mb-5 btn"
          onClick={() => {
            this.state.handleShow();
          }}
        >
          Select Tokens
        </button>
        <MoDal
          handleClose={this.state.handleClose}
          handleShow={this.state.handleShow}
          show={this.state.show}
        />
        <Card.Header>
          <h2>Swap</h2>Trade tokens in an instant
          <br />
        </Card.Header>
        <Card.Body>
          <button
            className="btn btn-light botton-rotate "
            onClick={(event) => {
              if (this.state.currentForm === "buy") {
                this.setState({ currentForm: "sell" });
              } else {
                this.setState({ currentForm: "buy" });
              }
            }}
          >
            <AiOutlineSwap />
          </button>
          {content}
        </Card.Body>
      </Card>
    );
  }
}

export default Main;
