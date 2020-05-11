import React, { useState, useEffect } from "react";

import { Link, useHistory } from "react-router-dom";

import logoVtex from "../../assets/VTEX_Logo.png";
import voltar from "../../assets/voltar.png";

import api from "../../services/api";

export default (props) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [value, setValue] = useState(0);

  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");

  const history = useHistory();

  useEffect(() => {
    async function geoLocation(long, lat) {
      return lat, long;
    }

    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  }, []);

  async function handleRegisterProduct(e) {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", name);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("value", value);
    formData.append("productImage", img);
    formData.append("lat", lat);
    formData.append("lon", lat);

    await api.post("/api/product/create", formData);

    history.push("/");
  }

  return (
    <div>
      <div className="cadastro_prod">
        <div className="container">
          <div className="form_prod">
            <div className="voltar">
              <Link to="/">
                <img src={voltar} alt="" />
              </Link>
            </div>
            <div className="row text-center">
              <img src={logoVtex} alt="Vtex Logo" width={200} />
            </div>
            <div className="row">
              <div className="col desk-1-2">
                <input
                  type="text"
                  placeholder="Nome do produto"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="col desk-1-2">
                <input
                  type="text"
                  placeholder="Categoria"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>
            </div>

            <div className="row">
              <div className="col desk-1-1">
                <textarea
                  type="text"
                  placeholder="Descreva um pouco o seu produto para os compradores"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>

            <div className="row">
              <div className="col desk-1-1 text-center">
                <label className="label_img">
                  Imagem do produto
                  <input
                    className="input_img"
                    type="file"
                    placeholder="Imagem"
                    onChange={(e) => setImg(e.target.files[0])}
                  />
                </label>
              </div>
            </div>

            <div className="row">
              <div className="col desk-1-1">
                <input
                  type="text"
                  placeholder="Valor do produto"
                  onChange={(e) => setValue(+e.target.value)}
                />
              </div>
            </div>

            <div className="row">
              <div className="col desk-1-1">
                <div className="btn_form">
                  <a onClick={handleRegisterProduct}>Adicionar produto</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
