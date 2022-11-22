import './Ticket.css';
import { OrderInformation } from '../OrderInformation/OrderInformation';

export const Ticket = () => {
  return (
    <div className="ticket-with-client-order">
      <div className="waitress-name">Atiende: </div>
      <div className="ticket-section">Cant. &nbsp;Producto &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Costo</div>
      <div className="order-in-ticket">
      {OrderInformation()}
      </div>
      <div className="total-cost">Total: $30</div>
    </div>
  )
}
