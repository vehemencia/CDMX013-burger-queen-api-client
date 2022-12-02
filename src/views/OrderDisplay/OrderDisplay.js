import { SelectionButton } from '../../components/SelectionButton/SelectionButton.js';
import { ProductsInMenu } from '../../components/ProductsInMenu/ProductsInMenu.js';
import { EnterOrSendButton } from '../../components/EnterOrSendButton/EnterOrSendButton.js';
import { Ticket } from '../../components/Ticket/Ticket.js';
import './OrderDisplay.css'
import { useState } from 'react';

export const OrderDisplay = () => {
  const [productQuantity, setProductQuantity] = useState(0);

  function addOrRemoveProduct(typeOfClass){
    if (typeOfClass === 'minus-button'){
      setProductQuantity(productQuantity > 0 ? productQuantity - 1 : 0)
    } else setProductQuantity(productQuantity + 1)
  }
  
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
          <ProductsInMenu value={productQuantity} onChange={() => addOrRemoveProduct()} />
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
