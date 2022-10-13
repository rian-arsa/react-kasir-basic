import React from "react";
import { Badge, Col, ListGroup, Row } from "react-bootstrap";
import numberFormat from "../utils/utils";

function Hasil(props) {
  const { keranjangs } = props;

  return (
    <Col md={3} mt={2}>
      <h4>
        <strong>Keranjang</strong>
      </h4>
      <hr />
      <ListGroup variant="flush">
        {keranjangs.length !== 0 ? (
          keranjangs.map((keranjang) => {
            return (
              <ListGroup.Item key={keranjang.id}>
                <Row className="d-flex justify-content-between">
                  <Col xs={1} className="me-2">
                    <Badge bg="success" className="item-start">
                      x{keranjang.jumlah}
                    </Badge>
                  </Col>
                  <Col>
                    {keranjang.product.nama}
                    <p>Rp {numberFormat(keranjang.product.harga)}</p>
                  </Col>
                  <Col>
                    <strong className="float-end">
                      Rp {numberFormat(keranjang.total_harga)}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
            );
          })
        ) : (
          <ListGroup.Item>
            <p>Keranjang Kosong</p>
          </ListGroup.Item>
        )}
      </ListGroup>
    </Col>
  );
}

export default Hasil;
