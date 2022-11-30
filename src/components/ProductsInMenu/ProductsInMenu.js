import './ProductsInMenu.css';
import { CounterForMenu } from '../CounterForMenu/CounterForMenu';
import { useState, useEffect } from 'react';

export const ProductsInMenu = () => {
  const [product, setProducts] = useState([])
  useEffect(() => {
    fetch('https://6384dd913fa7acb14f032122.mockapi.io/product')
      .then(response => response.json())
      .then(json => setProducts(json))
  }, [])
  if (product == product) {
    const foodProducts = product.filter(individualProduct => individualProduct.type === 'alimentos')
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