import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import logoVtex from "../../assets/VTEX_Logo.png";
export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const mail = localStorage.getItem("email");

    if (mail) {
      history.push("/");
    }
  }, []);

  function handleLogin() {
    setTimeout(() => {
      if (!(email.trim() === "" || password.trim() === "")) {
        localStorage.setItem("email", email);
        history.push("/");
      }
    }, 700);
  }

  return (
    <div>
      <div className="cadastro_prod form-section">
        <div className="container form-wrapper">
          <div className="form_prod">
            <div className="row text-center">
                <img src={logoVtex} alt="Vtex Logo" width={200} />
            </div>
            <div className="row">
              <div className="col">
                <div className="input-block">
                  <input
                    type="email"
                    placeholder="Seu email"
                    id="login-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="input-block">
                  <input
                    type="password"
                    placeholder="Sua senha"
                    id="login-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col desk-1-1">
                <div className="btn_login btn-login">
                  <a onClick={handleLogin}>Entrar</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
