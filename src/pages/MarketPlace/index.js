import React, { useState } from "react";

import Location from "../../assets/location.svg";
import Relogio from "../../assets/relogio.png";
import Logistica from "../../assets/logistic.svg";

import Header from "./Header";
import Footer from "./Footer";

export default function MarketPlace() {
  const [cart, setCart] = useState(0);

  function handleCart() {
    const carrinho = parseInt(cart) + 1;
    setCart(carrinho);
  }

  return (
    <div>
      <Header cart={cart} />
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
      <Footer />
    </div>
  );
}
