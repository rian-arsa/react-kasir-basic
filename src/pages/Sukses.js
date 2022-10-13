import axios from "axios";
import React, { useEffect } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { API_URL } from "../utils/constanst";

function Sukses() {
  useEffect(() => {
    axios({
      method: "GET",
      url: API_URL + "keranjangs",
    })
      .then((res) => {
        res.data.map((item) => {
          return axios({
            method: "DELETE",
            url: API_URL + "keranjangs/" + item.id,
          })
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="mt-4 text-center mt-5">
      <Image src="assets/images/succes.svg" width={300} />
      <h4 className="mt-5">
        <strong>Pembelian Berhasil</strong>
      </h4>
      <p>Terimakasih sudah berbelanja dengan menggunakan Rian Kasir</p>

      <Link className="btn btn-primary" to={"/"}>
        Kembali
      </Link>
    </div>
  );
}

export default Sukses;
