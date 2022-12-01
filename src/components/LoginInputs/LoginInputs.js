import { EnterOrSendButton } from '../EnterOrSendButton/EnterOrSendButton.js';
import styles from './LoginInputs.module.css'

export const LoginInputs = () => {
  return (
    <main className={styles.loginContent}>
      <div className={styles.imgDiv}>
        <img src='https://iili.io/H9lsuOx.png' id={styles.logoImg} alt='logo'/>
      </div>
      <div className={styles.inputsDiv}>
        <h2 id={styles.loginText}>Inicia sesión</h2>
        <h3 className={styles.loginLabel}>Correo electrónico</h3>
        <input className={styles.loginInput} type='email'></input>
        <h3 className={styles.loginLabel}>Contraseña</h3>
        <input className={styles.loginInput} type='password'></input>
        <EnterOrSendButton buttonText='ENTRAR'/>
      </div>
    </main>
  );
}