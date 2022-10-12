import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Hasil, ListCategories, NavbarComponent } from "./components";

function App() {
  return (
    <>
      <NavbarComponent />
      <div className="mt-3">
        <Container fluid>
          <Row>
            <ListCategories />
            <Col>
              <h4>
                <strong>Daftar Produk</strong>
              </h4>
              <hr />
            </Col>
            <Hasil />
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
