import React, { useState } from "react";

import LogoVtex from "../../assets/VTEX_Logo.png";
import Lupa from "../../assets/lupa.svg";
import Location from "../../assets/location.svg";
import Relogio from "../../assets/relogio.png";
import Cart from "../../assets/cart.svg";
import Avatar from "../../assets/avatar.svg";
import Logistica from "../../assets/logistic.svg";

export default function MarketPlace() {
  const [cart, setCart] = useState(0);

  function handleCart() {
    const carrinho = parseInt(cart) + 1;
    setCart(carrinho);
  }

  return (
    <div>
      <div className="top-bar-cart">
        <img src={Cart} width={27} alt="Cart Buy" />
        <div>{cart}</div>
      </div>
      <div className="top-bar-avatar">
        <img src={Avatar} width={27} alt="Cart Buy" />
      </div>
      <div>
        <img src={LogoVtex} width={200} alt="" />
      </div>
      <div className="pesquisa">
        <span>
          <img src={Lupa} width={15} alt="" />
        </span>
        <span>
          <input className="label-search" placeholder="O que procura?" />
        </span>
      </div>
      <div className="topBar">
        <div className="navBar">
          <span>
            <img src={Location} width={18} alt="" />
            <label>Sua Localização</label>
          </span>
          <div className="block">
            <img src={Relogio} width={140} alt="" />
            <div>
              <span>
                <label>R$ 989,99</label>
                <button onClick={handleCart}>Comprar</button>
              </span>
            </div>
          </div>
          <div className="block">
            <img src={Relogio} width={140} alt="" />
            <div>
              <span>
                <label>R$ 989,99</label>
                <button onClick={handleCart}>Comprar</button>
              </span>
            </div>
          </div>
          <div className="block">
            <img src={Relogio} width={140} alt="" />
            <div>
              <span>
                <label>R$ 989,99</label>
                <button onClick={handleCart}>Comprar</button>
              </span>
            </div>
          </div>
          <div className="block">
            <img src={Relogio} width={140} alt="" />
            <div>
              <span>
                <label>R$ 989,99</label>
                <button onClick={handleCart}>Comprar</button>
              </span>
            </div>
          </div>
          <div className="block">
            <img src={Relogio} width={140} alt="" />
            <div>
              <span>
                <label>R$ 989,99</label>
                <button onClick={handleCart}>Comprar</button>
              </span>
            </div>
          </div>
          <div className="block">
            <img src={Relogio} width={140} alt="" />
            <div>
              <span>
                <label>R$ 989,99</label>
                <button onClick={handleCart}>Comprar</button>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="topBar">
        <div className="navBar">
          <span>
            <img src={Logistica} width={18} alt="" />
            <label>Pronto Entrega!</label>
          </span>
          <div className="block">
            <img src={Relogio} width={140} alt="" />
            <div>
              <span>
                <label>R$ 989,99</label>
                <button onClick={handleCart}>Comprar</button>
              </span>
            </div>
          </div>
          <div className="block">
            <img src={Relogio} width={140} alt="" />
            <div>
              <span>
                <label>R$ 989,99</label>
                <button onClick={handleCart}>Comprar</button>
              </span>
            </div>
          </div>
          <div className="block">
            <img src={Relogio} width={140} alt="" />
            <div>
              <span>
                <label>R$ 989,99</label>
                <button onClick={handleCart}>Comprar</button>
              </span>
            </div>
          </div>
          <div className="block">
            <img src={Relogio} width={140} alt="" />
            <div>
              <span>  
                <label>R$ 989,99</label>
                <button onClick={handleCart}>Comprar</button>
              </span>
            </div>
          </div>
          <div className="block">
            <img src={Relogio} width={140} alt="" />
            <div>
              <span>
                <label>R$ 989,99</label>
                <button onClick={handleCart}>Comprar</button>
              </span>
            </div>
          </div>
          <div className="block">
            <img src={Relogio} width={140} alt="" />
            <div>
              <span>
                <label>R$ 989,99</label>
                <button onClick={handleCart}>Comprar</button>
              </span>
            </div>
          </div>
        </div>
      </div>
      <footer className="page-footer footer-background">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Vtex</h5>
              <p className="grey-text text-lighten-4">
                Mercado de Varejo Digital.
              </p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Contato</h5>
              <ul>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Tel: (11) 4001-4569
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Email: teste@teste.com.br
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!"></a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3">
                    Rua Lorisvaldo, 450 - São Jorge - SP
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © 2020 Copyright By Developer Grupo 71
            <a className="grey-text text-lighten-4 right" href="#!">
              Facebook
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
