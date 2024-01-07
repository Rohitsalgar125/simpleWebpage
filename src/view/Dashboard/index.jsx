// Dashboard.js

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./index.css";
import Carousel from "../../components/carousels/index";

const Index = () => {
  return (
    <div className="">
      <Container fluid>
        <Row>
          <Col md={6}>
            <Card className="dashboard-card">
              <Card.Body>
                <Card.Title>Statistic 1</Card.Title>
                <Card.Text>
                  This is a brief description of the first statistic.
                </Card.Text>
                <button className="btnColor">Learn more</button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="dashboard-card">
              <Card.Body>
                <Card.Title>Statistic 2</Card.Title>
                <Card.Text>
                  This is a brief description of the second statistic.
                </Card.Text>
                <button className="btnColor">Learn more</button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Carousel />
      <div className="videoDiv">
        <video width="700" height="240" controls>
          <source
            src={"../../public/assets/images/video.mp4"}
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default Index;
