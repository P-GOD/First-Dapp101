import React from "react";
import { Container, Card, Row, Col, Image, Button } from "react-bootstrap";
import pee from "./../resources/pee.jpg";
import pon from "./../resources/pon.png";

function About() {
  return (
    <div className="home-body">
      <Container>
        <Row className="home-main-row">
          <Col>
            <Card className="p-5 card-about">
              <Card.Body>
                <Image src={pon} height={300} roundedCircle />
                <Card.Title>
                  <h4>Mr. Methapon Sornsomboon</h4>
                </Card.Title>
                <Card.Text>
                  <h3>Contact</h3>
                  <ul className="myskills">
                    <li>
                      <b>E-mail:</b> s6214012620263@kmutnb.ac.th
                    </li>
                    <li>
                      <b>Tel:</b> 062-7451827
                    </li>
                    <li>
                      <b>Line:</b> ponkung222
                    </li>
                    <li>
                      <b>Facebook:</b> Maythapon Sornsomboon
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="p-5 card-about">
              <Card.Body>
                <Image src={pee} height={300} roundedCircle />
                <Card.Title>
                  <h4>Mr. Peerapong Pansee</h4>
                </Card.Title>
                <Card.Text>
                  <h3>Contact</h3>
                  <ul className="myskills">
                    <li>
                      <b>E-mail:</b> s6214012620093@kmutnb.ac.th
                    </li>
                    <li>
                      <b>Tel:</b> 080-0695727
                    </li>
                    <li>
                      <b>Line:</b> pee0875126449
                    </li>
                    <li>
                      <b>Facebook:</b> Pansee Peerapong
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default About;
