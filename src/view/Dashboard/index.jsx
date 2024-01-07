// Dashboard.js

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./index.css";
import SwiperComponent from "../../components/Swipper/index";
import buildingImg from "../../../public/assets/images/twelve.jpg";

const Index = () => {
  return (
    <div className="">
      <Container fluid>
        <Row>
          <Col md={4}>
            <Card className="dashboard-card">
              <Card.Body>
                <Card.Title>Sweet Home</Card.Title>
                <img
                  src={buildingImg}
                  width={"350px"}
                  height={"300px"}
                  alt="building"
                />
              </Card.Body>
            </Card>
          </Col>

          <Col md={8}>
            <Card className="dashboard-card">
              <Card.Body>
                <Card.Title>
                  Warming Hearts, Opening Doors: Our Housewarming Party
                </Card.Title>
                <Card.Text>
                  <ul>
                    <li>
                      "A house is made of bricks and beams, but a home is made
                      of hopes and dreams. Join us as we celebrate the warmth of
                      new beginnings in our new abode!"
                    </li>
                    <li>
                      "Home is where love resides, memories are created, and
                      friends and family belong. Join us as we open the doors of
                      our new home and create lasting memories together.
                    </li>
                    <li>
                      New walls, new memories, and a whole lot of love! Please
                      join us for a housewarming celebration as we turn our new
                      house into a home."
                    </li>
                    <li>
                      "Every corner, every room, tells a story of love and
                      dreams come true. Join us surrounded by the warmth of
                      friends
                    </li>
                    <li>
                      Our journey brought us to this beautiful home, and we want
                      to share the joy with you! Please join us for a
                      housewarming party that will fill these walls."
                    </li>
                    <li>
                      New address, same love. Join us for a housewarming
                      celebration as we create a home filled with warmth,
                      laughter, and cherished moments.
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <SwiperComponent />
    </div>
  );
};

export default Index;
