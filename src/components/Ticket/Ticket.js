import './Ticket.css'

export const Ticket = () => {
  return (
  <div className="ticket-with-client-order">
    <div className="waitress-name">Atiende: </div>
    <div className="ticket-section">Cant.    Producto     Costo</div>
    <div className="order-in-ticket">
      <div className="q-of-products"></div>
      <div className="product-name"></div>
      <div className="cost-of-products"></div>
      <div className="delete-from-order"></div>
    </div>
    <div className="total-cost">Total: </div>
  </div>
  )
}
