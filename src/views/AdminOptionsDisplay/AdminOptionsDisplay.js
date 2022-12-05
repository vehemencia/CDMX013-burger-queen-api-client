import { ActivitiesButton } from '../../components/ActivitiesButton/ActivitiesButton.js';
import './AdminOptionsDisplay.css'

export const AdminOptionsDisplay = () => {
  return (
    <main className="admin-content">
      <div className="img-div">
        <img src="https://iili.io/H9lsuOx.png" id="logo-img" alt="logo"/>
      </div>
      <div className="inputs-div">
      <ActivitiesButton buttonText='Crea un usuario'/>
      <ActivitiesButton buttonText='Edita un usuario'/>
      <ActivitiesButton buttonText='Elimina un usuario'/>
      <ActivitiesButton buttonText='Agrega un producto'/>
      <ActivitiesButton buttonText='Elimina un producto'/>
      </div>
    </main>
  );
}