import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function Sukses() {
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
