import React from "react";
import { Badge, Col, ListGroup, Row } from "react-bootstrap";
import numberFormat from "../utils/utils";

function Hasil(props) {
  const { keranjangs } = props;

  console.log();

  return (
    <Col md={3} mt={2}>
      <h4>
        <strong>Daftar Kategori</strong>
      </h4>
      <hr />
      <ListGroup variant="flush">
        {keranjangs
          ? keranjangs.map((keranjang) => {
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
                      <strong className="float-right">
                        Rp {numberFormat(keranjang.total_harga)}
                      </strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
              );
            })
          : "Data Kosong"}
      </ListGroup>
    </Col>
  );
}

export default Hasil;
