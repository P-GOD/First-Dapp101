import React, { Component } from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import logocloud from "./../resources/cloud.png";

const defaultAvatar =
  "data:image/png;base64,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";
const nft =
  "https://rarible.com/user/0x16e8b0c7d7c2b8456ac329e0f313b3983a0e8d19/sale";

class NavBar extends Component {
  render() {
    return (
      //Navbar

      <Navbar
        bg="light"
        variant="light"
        sticky="top"
        expand="md"
        className="NavBar"
      >
        <Navbar.Brand as={Link} to="/">
          <Image className="mr-2 mb-2" src={logocloud} width={50} />
          CloudsKingdomSwap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse>
          <Nav>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/swap">
              Swap
            </Nav.Link>
            <Nav.Link as={Link} to="/earn">
              Earn
            </Nav.Link>
            <Nav.Link href={nft} target="blank">
              NFT
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Image className="mb-2 mr-2" src={defaultAvatar} width={20} />
              <b className="w-auto border border-5 p-1 rounded-pill border-warning">
                {this.props.account}
              </b>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
