import { Ticket } from '../Ticket/Ticket';
import { SelectionButton } from '../SelectionButton/SelectionButton.js';
import { ProductsInMenu } from '../ProductsInMenu/ProductsInMenu';
import style from './OrderMenu.css'

export const OrderMenu = () => {
  return (
    <main className={style.menuDisplay}>
      <header className="header-menu-display">
        <img src="https://iili.io/H9lsuOx.png" id="logo-img" alt="logo" />
      </header>
      <section className="menu-and-table-section">
        <div className="food-selection">
          {SelectionButton('Alimentos')}
          {SelectionButton('Bebidas')}
        </div>
        <div className="table-number-section">
          <h3 id="table-num">Núm de mesa: </h3> <input type="text" pattern="[0-9]" id="table-input"></input>
        </div>
      </section>
      <section className="products-and-ticket">
        <div className="product-list">
          {ProductsInMenu('Pan de muerto')}
          {ProductsInMenu('Pastel de red velvet')}
          {ProductsInMenu('Tarta de cereza')}
        </div>
        <div className="ticket-with-order-div">
        {Ticket()}
        </div>
      </section>
      <footer className="footer-with-elements"></footer>
    </main>
  )
}
