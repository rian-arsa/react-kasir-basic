import React from "react";
import { Col, Row } from "react-bootstrap";

function TotalBayar() {
  return (
    <Row>
      <Col md={{ span: 3, offset: 9 }} className="px-4">
        <h4>Total harga : Rp 100.000</h4>
      </Col>
    </Row>
  );
}

export default TotalBayar;
