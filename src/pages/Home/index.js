import React from "react";

import chart from "../../assets/grafico.png";

import Menu from "../shared/menu";

export default function Home() {
  return (
    <div>
      <div className="menu">
        <Menu />
      </div>

      <div>
        <div className="charts">
          <img src={chart} alt="" />
        </div>
      </div>
    </div>
  );
}
