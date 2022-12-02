import './ProductsInMenu.css';
import { CounterForMenu } from '../CounterForMenu/CounterForMenu';
import { useState, useEffect } from 'react';

export const ProductsInMenu = (ourValue, ourFunction) => {
  const [product, setProducts] = useState([])
  useEffect(() => {
    fetch('https://6384dd913fa7acb14f032122.mockapi.io/product')
      .then(response => response.json())
      .then(json => setProducts(json))
  }, [])
  if (product == product) {
    const foodProducts = product.filter(individualProduct => individualProduct.type === 'bebidas')
    return (
      foodProducts.map(products =>
        <div className="individual-product" key={products.id}>
          <div className="name-of-product">{products.name}</div>
          <div className="price-of-product">${products.price}</div>
          <div className="product-counter"><CounterForMenu value={ourValue} onChange={ourFunction}/></div>
        </div>)
    )
  } else if (product === product) {
    const foodProducts = product.filter(individualProduct => individualProduct.type === 'bebidass')
    return (
      foodProducts.map(products =>
        <div className="individual-product" key={products.id}>
          <div className="name-of-product">{products.name}</div>
          <div className="price-of-product">${products.price}</div>
          <div className="product-counter"><CounterForMenu /></div>
        </div>)
    )
  }
}