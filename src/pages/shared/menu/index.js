import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Home from "../../Home";
import Product from "../../Product";

import logoVtex from "../../../assets/VTEX_Logo.png";
import userLogo from "../../../assets/user.png";

export default () => {
  const [home, setHome] = useState("active");
  const [product, setProduct] = useState("");
  const [logistic, setLogistic] = useState("");

  const [component, setComponent] = useState(<Home />);

  const history = useHistory();

  useEffect(() => {
    const email = localStorage.getItem("email");

    if (!email) {
      history.push("/login");
    }
  }, []);

  function alterActive(activeItem) {
    setHome("");
    setProduct("");
    setLogistic("");
    if (activeItem === "home") {
      setHome("active");
      setComponent(<Home />);
    } else if (activeItem === "product") {
      setProduct("active");
      setComponent(<Product />);
    } else {
      setLogistic("active");
    }
  }

  function logout() {
    localStorage.clear();
    history.push("/login");
  }

  return (
    <div>
      <div className="menu_lateral">
        <img src={logoVtex} alt="Vtex Logo" width={200} />
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
          <div className="user logout" onClick={() => logout()}>
            <img src={userLogo} alt="User" />
            <span>Logout</span>
          </div>
        </div>
      </div>
      <div className="container">{component}</div>
    </div>
  );
};
