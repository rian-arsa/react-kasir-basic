import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Hasil, ListCategories, Menus } from "../components";
import { API_URL } from "../utils/constanst";
import swal from "sweetalert";

function Home() {
  const [menus, setMenus] = useState([]);
  const [category, setCategory] = useState("Makanan");
  const [isUpdate, setIsUpdate] = useState(false);
  const [keranjangs, setKeranjangs] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: API_URL + "products?category.nama=" + category,
    })
      .then((res) => {
        setMenus(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);

  const changeMenus = (category) => {
    setCategory(category);
    setMenus([]);
  };

  const addKeranjang = (pesanan) => {
    axios({
      method: "GET",
      url: API_URL + "keranjangs?product.id=" + pesanan.id,
    })
      .then((res) => {
        if (res.data.length === 0) {
          axios({
            method: "POST",
            url: API_URL + "keranjangs",
            data: {
              jumlah: 1,
              total_harga: pesanan.harga,
              product: pesanan,
            },
          })
            .then((res) => {
              swal({
                title: "Berhasil",
                text: "Berhasil menambahkan " + pesanan.nama,
                icon: "success",
                button: false,
                timer: 1500,
              });
              setIsUpdate(true);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          axios({
            method: "PUT",
            url: API_URL + "keranjangs/" + res.data[0].id,
            data: {
              jumlah: res.data[0].jumlah + 1,
              total_harga: res.data[0].total_harga + pesanan.harga,
              product: pesanan,
            },
          })
            .then((res) => {
              swal({
                title: "Berhasil",
                text: "Berhasil menambahkan " + pesanan.nama,
                icon: "success",
                button: false,
                timer: 1500,
              });
              setIsUpdate(true);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios({
      method: "GET",
      url: API_URL + "keranjangs",
    })
      .then((res) => {
        setKeranjangs(res.data);
        setIsUpdate(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isUpdate]);

  return (
    <>
      <div className="mt-3">
        <Container fluid>
          <Row>
            <ListCategories changeMenus={changeMenus} category={category} />
            <Col>
              <h4>
                <strong>Daftar Produk</strong>
              </h4>
              <hr />
              <Row>
                {menus
                  ? menus.map((data) => {
                      return (
                        <Menus
                          menu={data}
                          key={data.id}
                          addKeranjang={addKeranjang}
                        />
                      );
                    })
                  : "Menu Kosong"}
              </Row>
            </Col>
            <Hasil keranjangs={keranjangs} />
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Home;
