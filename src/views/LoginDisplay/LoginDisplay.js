import { EnterOrSendButton } from '../../components/EnterOrSendButton/EnterOrSendButton.js';
//import styles from './LoginDisplay.module.css'
import './LoginDisplay.css'

export const LoginDisplay = () => {
  return (
    <main className='loginContent'>
      <div className='imgDiv'>
        <img src='https://iili.io/H9lsuOx.png' id='logoImg' alt='logo'/>
      </div>
      <div className='inputsDiv'>
        <h2 id='loginText'>Inicia sesión</h2>
        <h3 className='loginLabel'>Correo electrónico</h3>
        <input className='loginInput' type='email'></input>
        <h3 className='loginLabel'>Contraseña</h3>
        <input className='loginInput' type='password'></input>
        <EnterOrSendButton buttonText='ENTRAR'/>
      </div>
    </main>
  );
}