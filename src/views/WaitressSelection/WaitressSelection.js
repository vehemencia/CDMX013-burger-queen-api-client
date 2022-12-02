import { ActivitiesButton } from '../../components/ActivitiesButton/ActivitiesButton.js';
import './WaitressSelection.css'

export const WaitressSelection = () => {
  return (
    <main className="login-content-w">
      <div className="img-div-w">
        <img src="https://iili.io/H9lsuOx.png" id="logo-img-w" alt="logo"/>
      </div>
      <div className="inputs-div-w">
      <ActivitiesButton buttonText='Crea una orden'/>
      <ActivitiesButton buttonText='Entrega una orden'/>
      </div>
    </main>
  );
}