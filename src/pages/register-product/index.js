import React, { useState } from "react";

import { Link, useHistory } from "react-router-dom";

import api from "../../services/api";

export default (props) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [value, setValue] = useState(0);

  const history = useHistory();

  async function handleRegisterProduct(e) {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", name);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("value", value);
    formData.append("productImage", img);

    await api.post("/api/product/create", formData);

    history.push("/");
  }

  return (
    <div>
      <div className="row">
        <div className="col s3">
          <span>Nome do produto</span>
          <input
            type="text"
            placeholder="Nome do produto"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="row">
          <div className="col s3">
            <span>Categoria do produto</span>
            <input
              type="text"
              placeholder="Categoria"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="col s3">
            <span>Descrição do produto</span>
            <textarea
              type="text"
              placeholder="Descrição"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
        </div>

        <div className="row">
          <div className="col s3">
            <span>Imagem do produto</span>
            <input
              type="file"
              placeholder="Imagem"
              onChange={(e) => setImg(e.target.files[0])}
            />
          </div>
        </div>

        <div className="row">
          <div className="col s3">
            <span>Valor do produto</span>
            <input
              type="text"
              placeholder="Valor"
              value={value}
              onChange={(e) => setValue(+e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="col s3">
            <button onClick={handleRegisterProduct}>Adicionar produto</button>
          </div>

          <div className="col s3">
            <Link to="/">
              <button>voltar</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
