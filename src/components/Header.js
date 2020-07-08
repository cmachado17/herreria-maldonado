import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Row>
          <Col sm={12} md={6}>
            <p>Herreria</p>
          </Col>
          <Col sm={12} md={6}>
            <p>Herreria</p>
          </Col>
        </Row>
      </div>
    </header>
  );
};

export default Header;
