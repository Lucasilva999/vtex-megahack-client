import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import logoVtex from "../../../assets/vtex-logo.png";

import "./style.css";

export default () => {
  const [home, setHome] = useState("active");
  const [product, setProduct] = useState("");
  const [logistic, setLogistic] = useState("");

  const history = useHistory();

  function alterActive(activeItem) {
    setHome("");
    setProduct("");
    setLogistic("");
    if (activeItem === "home") {
      setHome("active");
    } else if (activeItem === "product") {
      setProduct("active");
    } else {
      setLogistic("active");
    }
  }

  function logout() {
    localStorage.clear();
    history.push("/login");
  }

  return (
    <nav>
      <div className="logo menu-bar" style={{ marginLeft: "70px" }}>
        <img src={logoVtex} alt="" />
        <div className="logout" onClick={() => logout()}>
          <span>logout</span>
        </div>
      </div>

      <div className="navigation" style={{ marginTop: "60px" }}>
        <div className={`home ${home}`} onClick={() => alterActive("home")}>
          Home
        </div>
        <div
          className={`product ${product}`}
          onClick={() => alterActive("product")}
        >
          Produto
        </div>
        <div
          className={`logistic ${logistic}`}
          onClick={() => alterActive("logistic")}
        >
          Logistica
        </div>
      </div>
    </nav>
  );
};
