import React, { Component, useState } from "react";
import Buyform from "./Buyform";
import Sellform from "./Sellform";
import { Card, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineSwap } from "react-icons/ai";
import "./../components/App.css";
import { MoDal } from "./../components/MoDal";

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

  changecontent = () => {
    if (this.state.currentForm === "buy") {
      return (
        <Buyform
          oneBalance={this.props.oneBalance}
          tokenBalance={this.props.tokenBalance}
          buyNimbus={this.props.buyNimbus}
          changecontent={this.changecontent}
        />
      );
    } else if (this.state.currentForm === "sell") {
      return (
        <Sellform
          oneBalance={this.props.oneBalance}
          tokenBalance={this.props.tokenBalance}
          sellNimbus={this.props.sellNimbus}
          changecontent={this.changecontent}
        />
      );
    }
  };

  render() {
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
            className="btn btn-light botton-rotate"
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
          {this.changecontent()}
        </Card.Body>
      </Card>
    );
  }
}

export default Main;
