import React from 'react';

import './styles.css';

export default function Login() {

  return (
    <div>
        <section class="form-section">
            <h1></h1>

            <div class="form-wrapper">
                <form>
                <div class="input-block">
                    <label for="login-email">Email</label>
                    <input type="email" id="login-email" />
                </div>
                <div class="input-block">
                    <label for="login-password">Password</label>
                    <input type="password" id="login-password" />
                </div>
                <button type="submit" class="btn-login">Login</button>
                </form>
            </div>
            </section>

        <ul class="squares"></ul>

    </div>
  );
}
