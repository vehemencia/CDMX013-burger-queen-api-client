import { ActivitiesButton } from '../ActivitiesButton/ActivitiesButton.js';
import './WaitressSelection.css'

export const WaitressSelection = () => {
  return (
    <main className="login-content">
      <div className="img-div">
        <img src="https://iili.io/H9lsuOx.png" id="logo-img" alt="logo"/>
      </div>
      <div className="inputs-div">
      {ActivitiesButton('Crea una orden')}
      {ActivitiesButton('Entrega una orden')}
      </div>
    </main>
  );
}