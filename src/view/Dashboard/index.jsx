// Dashboard.js

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./index.css";
import SwiperComponent from "../../components/Swipper/index";

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
      <SwiperComponent />
    </div>
  );
};

export default Index;
