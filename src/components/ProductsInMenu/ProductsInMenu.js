import './ProductsInMenu.css';
import './CounterForMenu.css';
import { useState, useEffect } from 'react';

export const ProductsInMenu = ({addOrRemoveProduct}) => {
  const [product, setProduct] = useState([])
  useEffect(() => {
    fetch('https://6384dd913fa7acb14f032122.mockapi.io/product')
      .then(response => response.json())
      .then(json => setProduct(json))
  }, [])
    return (
      product.map(products =>
        <div className="individual-product" key={products.id}>
          <div className="name-of-product">{products.name}</div>
          <div className="price-of-product">${products.price}</div>
          <div className="product-counter">
            <button className='minus-button' onClick={()=>addOrRemoveProduct('minus-button')}>-</button>
            <input className='counter-input'/>
            <button className='plus-button' onClick={()=>addOrRemoveProduct('plus-button')}>+</button></div>
        </div>)
    )
  }