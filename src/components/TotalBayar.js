import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { API_URL } from "../utils/constanst";
import { useNavigate } from "react-router-dom";

import numberFormat from "../utils/utils";

function TotalBayar(props) {
  const { keranjangs } = props;

  let navigate = useNavigate();

  const total = keranjangs.reduce((resul, item) => {
    return resul + item.total_harga;
  }, 0);

  const addPesanan = (total, menus) => {
    axios({
      method: "POST",
      url: API_URL + "pesanans",
      data: {
        total,
        menus,
      },
    })
      .then((res) => {
        navigate("/sukses");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="fixed-bottom">
      <Row>
        <Col md={{ span: 3, offset: 9 }} className="px-4">
          <h5>
            Total harga :{" "}
            <strong className="float-end">Rp {numberFormat(total)}</strong>
          </h5>
          <button
            className="btn btn-primary w-100 my-3"
            onClick={() => addPesanan(total, keranjangs)}
          >
            {" "}
            <FontAwesomeIcon icon={faCartShopping} className="me-2" />
            Bayar
          </button>
        </Col>
      </Row>
    </div>
  );
}

export default TotalBayar;
