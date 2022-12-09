import { SelectionButton } from '../../components/SelectionButton/SelectionButton.js';
import { ProductsInMenu } from '../../components/ProductsInMenu/ProductsInMenu.js';
import { EnterOrSendButton } from '../../components/EnterOrSendButton/EnterOrSendButton.js';
import { Ticket } from '../../components/Ticket/Ticket.js';
import './OrderDisplay.css';
import { useEffect, useState } from 'react';

export const OrderDisplay = () => {
  
  let initialOrder = {
    table: '',
    waiter: '',
    items: []
  }

  const exampleToAppend = ':3';

  const [order, setOrder] = useState(initialOrder)

  const handleAddItem = (item) => {
    setOrder((state) => )
    console.log(typeof order, order)
}

const [listOfProducts, setListOfProducts] = useState([]);

useEffect(() => {
  fetch('https://6384dd913fa7acb14f032122.mockapi.io/product')
    .then(response => response.json())
    .then(json => setListOfProducts(json))
}, [])

return (
  <main className='menuDisplay'>
    <header className='header-menu-display'>
      <img src='https://iili.io/H9lsuOx.png' id='logo-img' alt='logo' />
    </header>
    <section className='menu-and-table-section'>
      <div className='food-selection'>
        <SelectionButton menuOption='Alimentos' />
        <SelectionButton menuOption='Bebidas' />
      </div>
      <div className='table-number-section'>
        <h3 id='table-num'>Núm de mesa: </h3> <input type='text' pattern='[0-9]' id='table-input'></input>
      </div>
    </section>
    <section className='products-and-ticket'>
      <div className='product-list'>
        <ProductsInMenu data={listOfProducts} handleAddItem={handleAddItem}/>
      </div>
      <div className='ticket-with-order-div'>
        <Ticket />
      </div>
    </section>
    <footer className='footer-with-elements'>
      <EnterOrSendButton buttonText='ENVIAR' />
    </footer>
  </main>
)
}


  // {Product: 'Pan de muerto',
  // Quantity: 1,
  // Price: 50
  // Payment: Price * Quantity},
  // {Product: 'Pay de limon',
  // Quantity: 3,
  // Price: 30,
  // Payment: Price * Quantity}

// [...state, ...initialOrder, {items: exampleToAppend}]

// const newData = { products: dishSelected, client: clientName, dateEntry: date, userId: activeUser, status: "pending" }
