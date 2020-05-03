import React from "react";

import { Link } from "react-router-dom";

import Lupa from "../../assets/lupa.svg";
import Relogio from "../../assets/relogio.png";

export default (props) => {
  return (
    <div>
      <h2 className="center">Produtos Cadastrados</h2>
      <div className="pesquisa">
        <span>
          <img src={Lupa} width={20} />
        </span>
        <span>
          <input placeholder="Procurar produto cadastrado" />
          <Link to="/register-product">
            <button className="fa fa-plus">Adicionar produto</button>
          </Link>
        </span>
      </div>

      <div className="topBar">
        <div className="navBar">
          <div className="block">
            <img src={Relogio} width={140} />
            <div>TESTE</div>
          </div>
          <div className="block">
            <img src={Relogio} width={140} />
            <div>TESTE</div>
          </div>
          <div className="block">
            <img src={Relogio} width={140} />
            <div>TESTE</div>
          </div>
          <div className="block">
            <img src={Relogio} width={140} />
            <div>TESTE</div>
          </div>
          <div className="block">
            <img src={Relogio} width={140} />
            <div>TESTE</div>
          </div>
          <div className="block">
            <img src={Relogio} width={140} />
            <div>TESTE</div>
          </div>
        </div>
      </div>
    </div>
  );
};
