import React, { Component } from "react";
import Buyform from "./Buyformu";
import Sellform from "./Sellformu";
import { Card } from "react-bootstrap";
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
        <Buyform
          oneBalance={this.props.oneBalance}
          ethBalance={this.props.ethBalance}
          buyEther={this.props.buyEther}
        />
      );
    } else if (this.state.currentForm === "sell") {
      content = (
        <Sellform
          oneBalance={this.props.oneBalance}
          ethBalance={this.props.ethBalance}
          sellEther={this.props.sellEther}
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
