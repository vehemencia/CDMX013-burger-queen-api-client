import { Ticket } from '../Ticket/Ticket';
import { SelectionButton } from '../SelectionButton/SelectionButton.js';
import { ProductsInMenu } from '../ProductsInMenu/ProductsInMenu';
import { EnterOrSendButton } from '../EnterOrSendButton/EnterOrSendButton';
import './OrderMenu.css'
//import { useState } from 'react';

export const OrderMenu = () => {
  //const [isActive, setIsActive] = useState(true);
  return (
    <main className='menuDisplay'>
      <header className='header-menu-display'>
        <img src='https://iili.io/H9lsuOx.png' id='logo-img' alt='logo' />
      </header>
      <section className='menu-and-table-section'>
        <div className='food-selection'>
          <SelectionButton menuOption='Alimentos'/>
          <SelectionButton menuOption='Bebidas'/>
        </div>
        <div className='table-number-section'>
          <h3 id='table-num'>Núm de mesa: </h3> <input type='text' pattern='[0-9]' id='table-input'></input>
        </div>
      </section>
      <section className='products-and-ticket'>
        <div className='product-list'>
          <ProductsInMenu />
        </div>
        <div className='ticket-with-order-div'>
          <Ticket/>
        </div>
      </section>
      <footer className='footer-with-elements'>
        <EnterOrSendButton buttonText='ENVIAR'/>
      </footer>
    </main>
  )
}
