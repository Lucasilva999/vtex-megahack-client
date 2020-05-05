import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import api from "../../services/api";

import Lupa from "../../assets/lupa.svg";
import Relogio from "../../assets/relogio.png";

export default (props) => {
  const [products, setProducts] = useState([]);

  const [name] = localStorage.getItem("email").split("@");

  useEffect(() => {
    async function onLoad() {
      const res = await api.get("/api/products");
      setProducts(res.data.data);
    }
    onLoad();
    console.log(products);
  }, []);

  return (
    <div className="home">
      <div className="container">
        <div className="row">
          <h1 className="center title_prod">Produtos Recém Cadastrados</h1>
          <div className="pesquisa">
            <span>
              <img src={Lupa} width={20} />
            </span>
            <span>
              <input placeholder="Procurar produto cadastrado" />
            </span>
          </div>
        </div>
        <div className="row">
        <Link to="/register-product">
          <div className="add_prod">     
                <a className="fa fa-plus">Adicionar produto</a>
          </div>
        </Link>
        </div>
      </div>
        {
          !products.length && <div className="compra_feita produtos_cadastrados"><span>Nenhum produto cadastrado ): </span></div>
        }
        <div className="compra_feita produtos_cadastrados">
            {products.map((product, index) => (
              <div className="compra" key={index}>
                <div className="box">
                  <img
                    src={`http://localhost:5000${product.productImage}`}
                    alt="imagem do produto"
                  />
                  <p>
                    Preço:
                    {Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(product.value)}
                  </p>
                  <p>
                    Produto cadastrado por <a href="">{name}</a>
                  </p>
                  <p></p>
                </div>
              </div>
            ))}
          </div>
          {
            products.length > 0 && 
          <div className="compra_feita produtos_cadastrados_3">
            <a className="ver_mais">Ver Mais</a>
          </div>
          }
    </div>
  );
};
