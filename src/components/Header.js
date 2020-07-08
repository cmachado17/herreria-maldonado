import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Row className="centrar-vertical">
          <Col xs={6}>
            <h2>Herreria</h2>
          </Col>
          <Col xs={6}>
            <h2>Herreria</h2>
          </Col>
        </Row>
      </div>
    </header>
  );
};

export default Header;
