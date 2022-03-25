import React, { useState } from "react";
import { Modal, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import usdt from "./../resources/Tether.png";
import nim from "./../resources/tokenLogo.png";
import eth from "./../resources/ethtoken.png";
import bnb from "./../resources/BNB.png";
import dai from "./../resources/dai.png"
import usdc from './../resources/usdc.png'

export const MoDal = (props) => {
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Select Tokens</Modal.Title>
        </Modal.Header>
        <Modal.Body className="container">
          <Nav className="row">
            <Nav.Link as={Link} to="/uswap" className="ccol">
              <Image src={usdt} height={29} />
              <span className="ml-2">mUSDT</span>
            </Nav.Link>
            <div class="w-100"></div>
            <Nav.Link as={Link} to="/swap" className="col">
              <Image src={nim} height={29} />
              <span className="ml-2">NIM</span>
            </Nav.Link>
            <div class="w-100"></div>
            <Nav.Link as={Link} to="/eswap" className="col">
              <Image src={eth} height={29} />
              <span className="ml-2">mETH</span>
            </Nav.Link>
            <div class="w-100"></div>
            <Nav.Link as={Link} to="/bswap" className="col">
              <Image src={bnb} height={29} />
              <span className="ml-2">mBNB</span>
            </Nav.Link>
            <div class="w-100"></div>
            <Nav.Link as={Link} to="/dswap" className="col">
              <Image src={dai} height={29} />
              <span className="ml-2">mDai</span>
            </Nav.Link>
            <div class="w-100"></div>
            <Nav.Link as={Link} to="/usdcswap" className="col">
              <Image src={usdc} height={29} />
              <span className="ml-2">mUSDC</span>
            </Nav.Link>
          </Nav>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};
