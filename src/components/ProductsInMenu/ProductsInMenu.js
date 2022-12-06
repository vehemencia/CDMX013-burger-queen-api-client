import './ProductsInMenu.css';
import './CounterForMenu.css';

export const ProductsInMenu = ({data, addOrRemoveProduct}) => {
  return (
    data.map(individualProduct => 
      <div className="individual-product" key={individualProduct.id}>
        <div className="name-of-product">{individualProduct.name}</div>
        <div className="price-of-product">${individualProduct.price}</div>
        <div className="product-counter">
          <button className='minus-button' onClick={()=>addOrRemoveProduct('minus-button', individualProduct.id)}>-</button>
          <input className='counter-input' value={individualProduct.quant}/>
          <button className='plus-button' onClick={()=>addOrRemoveProduct('plus-button', individualProduct.id)}>+</button></div>
      </div>
    )
  )
}