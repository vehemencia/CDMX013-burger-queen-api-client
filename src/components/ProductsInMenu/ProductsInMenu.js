import './ProductsInMenu.css';
import './CounterForMenu.css';

export const ProductsInMenu = ({data}) => {
  return (
    data.map(individualProduct => 
      <div className="individual-product" key={individualProduct.id}>
        <div className="name-of-product">{individualProduct.name}</div>
        <div className="price-of-product">${individualProduct.price}</div>
        <div className="product-counter">
          <button className='minus-button'>-</button>
          <input className='counter-input' />
          <button className='plus-button'>+</button></div>
      </div>
    )
  )
}