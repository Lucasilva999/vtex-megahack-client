import React from "react";

import { Link } from "react-router-dom";

import Lupa from "../../assets/lupa.svg";
import Relogio from "../../assets/relogio.png";

export default (props) => {
  return (
    <div className="home">
      <h1 className="center">Produtos Recém Cadastrados</h1>
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

      <div className="compra_feita produtos_cadastrados">
        <div className="compra">
          <div className="box">
            <img src={Relogio} alt="" />
            <p>Preço: Negociável</p>
            <p>
              Produto cadastrado por <a href="">Pedro</a>
            </p>
            <span>2 minutos atrás - Zona Sul</span>
          </div>
        </div>
        <div className="compra">
          <div className="box">
            <img src={Relogio} alt="" />
            <p>Preço: R$ 199,90</p>
            <p>
              Produto cadastrado por <a href="">João</a>
            </p>
            <span>19 minutos atrás - Zona Norte</span>
          </div>
        </div>
        <div className="compra">
          <div className="box">
            <img src={Relogio} alt="" />
            <p>Preço: R$ 100,00</p>
            <p>
              Produto cadastrado por <a href="">Carlos</a>
            </p>
            <span>33 minutos atrás - Zona Oeste</span>
          </div>
        </div>
      </div>
      <div className="compra_feita produtos_cadastrados_2">
        <div className="compra">
          <div className="box">
            <img src={Relogio} alt="" />
            <p>Preço: R$ 150,00</p>
            <p>
              Produto cadastrado por <a href="">Marcelo</a>
            </p>
            <span>47 minutos atrás - Zona Sul</span>
          </div>
        </div>
        <div className="compra">
          <div className="box">
            <img src={Relogio} alt="" />
            <p>Preço: Negociável</p>
            <p>
              Produto cadastrado por <a href="">Júlia</a>
            </p>
            <span>Mais de uma hora - Zona Leste</span>
          </div>
        </div>
        <div className="compra">
          <div className="box">
            <img src={Relogio} alt="" />
            <p>Preço: Negociável</p>
            <p>
              Produto cadastrado por <a href="">Ana</a>
            </p>
            <span>3 horas atrás - Zona Sul</span>
          </div>
        </div>
      </div>
      <div className="compra_feita produtos_cadastrados_2">
        <div className="compra">
          <div className="box">
            <img src={Relogio} alt="" />
            <p>Preço: R$ 150,00</p>
            <p>
              Produto cadastrado por <a href="">Marcelo</a>
            </p>
            <span>47 minutos atrás - Zona Sul</span>
          </div>
        </div>
        <div className="compra">
          <div className="box">
            <img src={Relogio} alt="" />
            <p>Preço: Negociável</p>
            <p>
              Produto cadastrado por <a href="">Júlia</a>
            </p>
            <span>Mais de uma hora - Zona Leste</span>
          </div>
        </div>
        <div className="compra">
          <div className="box">
            <img src={Relogio} alt="" />
            <p>Preço: Negociável</p>
            <p>
              Produto cadastrado por <a href="">Ana</a>
            </p>
            <span>3 horas atrás - Zona Sul</span>
          </div>
        </div>
      </div>
      <div className="compra_feita produtos_cadastrados_3">
        <a className="ver_mais">Ver Mais</a>
      </div>
    </div>
  );
};
