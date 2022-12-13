import './Ticket.css';
import { OrderInformation } from '../OrderInformation/OrderInformation';

export const Ticket = ({ order }) => {
  // const priceAndQuant = order.items.map(x => x.product.price * x.quantity);
  // console.log(priceAndQuant.length)
  // console.log(priceAndQuant)
  // console.log(priceAndQuant.reduce((a, b) => (a + b) / priceAndQuant.length, 0))

  return (
    <div className="ticket-with-client-order">
      <div className="waitress-name">Atiende: </div>
      <div className="ticket-section">Cant. &nbsp;Producto &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Costo</div>
      <div className="order-in-ticket">
        <OrderInformation order={order} />
      </div>
      <div className="total-cost">Total:</div>
    </div>
  )
}
