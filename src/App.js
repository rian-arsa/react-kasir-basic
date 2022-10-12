import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Hasil, ListCategories, NavbarComponent, Menus } from "./components";
import { API_URL } from "./utils/constanst";

function App() {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: API_URL + "products",
    })
      .then((res) => {
        setMenus(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
              <Row>
                {menus
                  ? menus.map((data) => {
                      return <Menus menu={data} key={data.id} />;
                    })
                  : "Menu Kosong"}
              </Row>
            </Col>
            <Hasil />
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
