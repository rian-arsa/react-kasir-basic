import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, ListGroup } from "react-bootstrap";
import { API_URL } from "../utils/constanst";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faCoffee,
  faCheese,
} from "@fortawesome/free-solid-svg-icons";

const Icon = ({ nama }) => {
  if (nama === "Makanan")
    return <FontAwesomeIcon icon={faUtensils} className="mr-2" />;
  if (nama === "Minuman")
    return <FontAwesomeIcon icon={faCoffee} className="mr-2" />;
  if (nama === "Cemilan")
    return <FontAwesomeIcon icon={faCheese} className="mr-2" />;

  return <FontAwesomeIcon icon={faUtensils} className="mr-2" />;
};

function ListCategories(props) {
  const [categories, setCategories] = useState();
  const { changeMenus, category } = props;

  useEffect(() => {
    axios({
      method: "GET",
      url: API_URL + "categories",
    })
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Col md={2} mt={2}>
      <h4>
        <strong>Daftar Kategori</strong>
      </h4>
      <hr />
      <ListGroup>
        {categories
          ? categories.map((data) => {
              return (
                <ListGroup.Item
                  key={data.id}
                  onClick={() => changeMenus(data.nama)}
                  className={data.nama === category && "category-active"}
                  style={{ cursor: "pointer" }}
                >
                  <h6>
                    <Icon nama={data.nama} /> {data.nama}
                  </h6>
                </ListGroup.Item>
              );
            })
          : "Category Kosong"}
      </ListGroup>
    </Col>
  );
}

export default ListCategories;
