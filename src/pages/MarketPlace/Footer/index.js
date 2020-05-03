import React from "react";

export default function Footer() {
  return (
    <footer className="page-footer footer-background">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Vtex</h5>
            <p className="grey-text text-lighten-4">
              Mercado de varejo Digital.
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
  );
}
