import { EnterOrSendButton } from '../EnterOrSendButton/EnterOrSendButton.js';
import './LoginInputs.css';

export const LoginInputs = () => {
  return (
    <main className='login-content'>
      <div className='img-div'>
        <img src='https://iili.io/H9lsuOx.png' id='logo-img' alt='logo'/>
      </div>
      <div className='inputs-div'>
        <h2 id='login-text'>Inicia sesión</h2>
        <h3 className='login-label'>Correo electrónico</h3>
        <input className='login-input' type='email'></input>
        <h3 className='login-label'>Contraseña</h3>
        <input className='login-input' type='password'></input>
        {[EnterOrSendButton('ENTRAR')]}
      </div>
    </main>
  );
}