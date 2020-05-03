import React from "react";

import chart from "../../assets/grafico.png";
import Relogio from "../../assets/relogio.png";

export default function Home() {
  return (
    <div className="home">
      <div className="charts">
        <img src={chart} alt="" />
      </div>
      <div className="compra_feita">
        <div className="compra">
          <div className="box">
            <img src={Relogio} alt="" />
            <p>Compra feita por <a href="">Pedro</a></p>
            <span>3 minutos atrás - Zona Sul</span>
          </div>
        </div>
        <div className="compra">
          <div className="box">
            <img src={Relogio} alt="" />
            <p>Compra feita por <a href="">Silvia</a></p>
            <span>3 minutos atrás - Zona Oeste</span>
          </div>
        </div>
        <div className="compra">
          <div className="box">
            <img src={Relogio} alt="" />
            <p>Compra feita por <a href="">André</a></p>
            <span>3 minutos atrás - Zona Norte</span>
          </div>
        </div>
      </div>
    </div>
  );
}
