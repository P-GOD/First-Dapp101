import React from "react";
import "./Home.css";
import { Image, Button, Nav } from "react-bootstrap";
import maskot from "./../resources/homeBranner.png";
import cloud from "./../resources/prop6.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="korp">
      <div className="curved-div">
        <div className="curved-div upper">
          <svg viewBox="0 0 1440 319">
            <path
              fill="#eaf8fe"
              fill-opacity="1"
              d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <div className="row ad">
            <div className="col">
              <h2 className="d-flex justify-content-start">
                CloudsKingdomSwap
              </h2>
              <h1 className="">The Portal to DeFi</h1>
              <p className="d-flex justify-content-start">
                Swap, earn on the leading decentralized crypto trading protocol.
              </p>
              <span className="d-flex justify-content-start">
                <Nav.Link as={Link} to={"/swap"} className="btn mt-4">
                  <h3 className="">Lunch APP</h3>
                </Nav.Link>
              </span>
            </div>
            <div class="col">
              <div className="d-flex justify-content-start">
                <Image src={maskot} className="img-fluid sticky-sm-top mt-3" />
              </div>
            </div>
          </div>
        </div>
        <svg viewBox="0 0 1440 319">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Home;
