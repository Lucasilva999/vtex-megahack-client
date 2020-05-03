import React from "react";
import { Link } from "react-router-dom";

import Lupa from "../../../assets/lupa.svg";
import Cart from "../../../assets/cart.svg";
import Avatar from "../../../assets/avatar.svg";
import LogoVtex from "../../../assets/VTEX_Logo.png";

export default function Header(props) {
  return (
    <div>
      <div className="top-bar-cart">
        <Link to="/">
          <img src={Cart} width={27} alt="Cart Buy" />
          <div>{props.cart}</div>
        </Link>
      </div>
      <div className="top-bar-avatar">
        <img src={Avatar} width={27} alt="Cart Buy" />
      </div>
      <div>
        <img src={LogoVtex} width={200} alt="" />
      </div>
      <div className="pesquisa">
        <span>
          <img src={Lupa} width={20} alt="" />
        </span>
        <span>
          <input placeholder="Oque procura?" />
        </span>
      </div>
    </div>
  );
}
