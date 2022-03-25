import React from "react";
import { Link } from "react-router-dom";
import { Nav, Image } from "react-bootstrap";
import logocloud from "./../resources/cloud.png";

function FooTer() {
  return (
    <footer className="main-footer bg-light ">
      <div className="row row-m justify-content-center">
        <div className="col-md-3 col-sm-4 mt-5">
          <h4>Frontend</h4>
          <ul className="list-unstyled mt-4">
            <li>Peerapong Pansee</li>
            <li>s6214012620093@kmutnb.ac.th</li>
            <li>080-0695724</li>
            <li>
              <a href="https://www.facebook.com/Ponkung222/">Facebook</a>
            </li>
          </ul>
        </div>
        <div className="col-md-3 col-sm-4 mt-5">
          <h4>Backend</h4>
          <ul className="list-unstyled mt-4">
            <li>Methapon Sornsomboon</li>
            <li>s6214012620263@kmutnb.ac.th</li>
            <li>062-7451827</li>
            <li>
              <a href="https://www.facebook.com/Ponkung222/">Facebook</a>
            </li>
          </ul>
        </div>
        <div className="col-md-3 col-sm-4 mt-5">
          <Nav.Link as={Link} to="/">
            <h4 className="text-dark">
              <Image className="mr-2 mb-2" src={logocloud} width={50} />
              CloudsKingdomSwap
            </h4>
          </Nav.Link>
        </div>
      </div>
    </footer>
  );
}

export default FooTer;
