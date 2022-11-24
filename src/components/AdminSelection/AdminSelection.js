import { ActivitiesButton } from '../ActivitiesButton/ActivitiesButton.js';
import './AdminSelection.css'

export const AdminSelection = () => {
  return (
    <main className="admin-content">
      <div className="img-div">
        <img src="https://iili.io/H9lsuOx.png" id="logo-img" alt="logo"/>
      </div>
      <div className="inputs-div">
      {ActivitiesButton('Agrega un usuario')}
      {ActivitiesButton('Edita un usuario')}
      {ActivitiesButton('Elimina un usuario')}
      </div>
    </main>
  );
}