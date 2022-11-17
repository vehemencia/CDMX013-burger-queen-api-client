import { ButtonOK } from './ButtonOK.js';
export function Login() {
  return (
    <main class="login-content">
      <div class="img-div">
        <img src="https://iili.io/H9lsuOx.png" id="logo-img"></img>
      </div>
      <div class="inputs-div">
        <h2 id="login-text">Inicia sesión</h2>
        <h3 class="login-label">Correo electrónico</h3>
        <input class="login-input" type="email"></input>
        <h3 class="login-label">Contraseña</h3>
        <input class="login-input" type="password"></input>
        {ButtonOK('ENTRAR')}
      </div>
    </main>
  );
}
