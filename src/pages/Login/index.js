import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';

export default function Login() {

    const history  = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    useEffect(() => {
        
        const mail = localStorage.getItem('email')

        if (mail) {
            history.push('/');        
        }

    }, [])

  function handleLogin() {

    localStorage.setItem('email', email);
    history.push('/');

  }

  return (
    <div>
        <section className="form-section">
            <h1></h1>

            <div className="form-wrapper">
                <form>
                <div className="input-block">
                    <label>Email</label>
                    <input type="email" id="login-email" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="input-block">
                    <label>Senha</label>
                    <input type="password" id="login-password" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <button type="submit" onClick={handleLogin} className="btn-login">Login</button>
                </form>
            </div>
            </section>

        <ul className="squares"></ul>

    </div>
  );
}
